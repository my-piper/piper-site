import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import express from 'express'
import compression from 'compression'
import sirv from 'sirv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const isProduction = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 5173
const base = process.env.BASE || '/'

async function createServer() {
    const app = express()

    app.use(compression())

    let vite
    if (!isProduction) {
        const { createServer } = await import('vite')
        vite = await createServer({
            server: { middlewareMode: true },
            appType: 'custom',
            base,
        })
        app.use(vite.middlewares)
    } else {
        // Sirv is used for static assets in production
        app.use(base, sirv('dist/client', { extensions: [] }))
    }

    app.use(async (req, res, next) => {
        let url = req.originalUrl.replace(base, '')
        if (!url.startsWith('/')) {
            url = '/' + url
        }

        if (url === '/' || url === '') {
            return res.redirect(307, '/en/')
        }

        try {
            let template
            let render

            if (!isProduction) {
                template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8')
                template = await vite.transformIndexHtml(url, template)
                render = (await vite.ssrLoadModule('/src/entry-server.jsx')).render
            } else {
                template = fs.readFileSync(path.resolve(__dirname, 'dist/client/index.html'), 'utf-8')
                render = (await import('./dist/server/entry-server.js')).render
            }

            const { html } = render(url)

            const appHtml = template.replace(`<!--app-html-->`, html)

            res.status(200).set({ 'Content-Type': 'text/html' }).end(appHtml)
        } catch (e) {
            !isProduction && vite.ssrFixStacktrace(e)
            console.log(e.stack)
            res.status(500).end(e.stack)
        }
    })

    app.listen(port, () => {
        console.log(`Server started at http://localhost:${port}`)
    })
}

createServer()
