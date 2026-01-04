import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import ru from './locales/ru.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: { translation: ru },
        },
        fallbackLng: 'en',
        debug: false,
        lng: 'en', // default, will be overridden by changeLanguage calls
        interpolation: {
            escapeValue: false, // React escapes by default
        },
    });

export default i18n;
