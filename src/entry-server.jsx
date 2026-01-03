import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from './App'
import './index.css'
import i18n from './i18n'

export function render(url) {
    // Parse language from query parameter
    const urlObj = new URL(url, 'http://localhost');
    const lang = urlObj.searchParams.get('lang');

    // Set language for SSR
    if (lang && (lang === 'ru' || lang === 'en')) {
        i18n.changeLanguage(lang);
    } else {
        i18n.changeLanguage('en');
    }

    const html = ReactDOMServer.renderToString(
        <React.StrictMode>
            <StaticRouter location={url}>
                <App />
            </StaticRouter>
        </React.StrictMode>
    )
    return { html }
}
