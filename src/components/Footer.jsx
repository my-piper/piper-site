import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation();

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="w-full py-12 border-t border-white/10 bg-bg-card text-text-muted">
            <div className="w-full max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <a href="/" className="text-2xl font-bold tracking-tighter text-white">Piper</a>
                    <p className="text-sm mt-2">Piper {new Date().getFullYear()} </p>
                </div>

                <div className="flex gap-8 text-sm">
                    <Link to="/terms-of-use" onClick={handleScrollToTop} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.term-of-use', 'Term of use')}</Link>
                    <Link to="/privacy-policy" onClick={handleScrollToTop} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.privacy-policy', 'Privacy policy')}</Link>
                    <Link to="/gdpr" onClick={handleScrollToTop} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.gdpr', 'GRPR')}</Link>
                    <Link to="/company" onClick={handleScrollToTop} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.company', 'Company')}</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
