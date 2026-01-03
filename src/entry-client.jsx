import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import i18n from './i18n'

// Parse language from query parameter
const params = new URLSearchParams(window.location.search);
const lang = params.get('lang');

// Set language before hydration to match SSR
if (lang && (lang === 'ru' || lang === 'en')) {
    i18n.changeLanguage(lang);
}

const container = document.getElementById('root');

const app = (
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);

if (container.hasChildNodes() && container.innerHTML !== '<!--app-html-->') {
    ReactDOM.hydrateRoot(container, app);
} else {
    ReactDOM.createRoot(container).render(app);
}
