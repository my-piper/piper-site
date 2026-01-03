import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';

// Custom query string detector for 'lang' parameter
const queryStringDetector = {
    name: 'querystring',
    lookup() {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            return params.get('lang');
        }
        return null;
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
        },
        fallbackLng: 'en',
        debug: false,
        detection: {
            order: ['querystring', 'navigator'],
            lookupQuerystring: 'lang',
            caches: []
        },
        interpolation: {
            escapeValue: false, // React escapes by default
        },
    });

// Add custom detector
i18n.services.languageDetector.addDetector(queryStringDetector);

export default i18n;
