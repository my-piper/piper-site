import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Globe, Github, ChevronDown, Menu, X, Boxes, Bot, LayoutPanelLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/site-logo.svg';

const Navbar = () => {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'en', name: 'English' },
        { code: 'ru', name: 'Русский' }
    ];

    const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsLangDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const changeLanguage = (langCode) => {
        const currentPath = location.pathname;
        const currentSearch = new URLSearchParams(location.search);

        // Change language immediately
        i18n.changeLanguage(langCode);

        // For English (default), remove lang parameter; for others, add it
        if (langCode === 'en') {
            currentSearch.delete('lang');
        } else {
            currentSearch.set('lang', langCode);
        }

        // Navigate to current path with or without language parameter
        const searchString = currentSearch.toString();
        navigate(`${currentPath}${searchString ? '?' + searchString : ''}`);

        // Close dropdown
        setIsLangDropdownOpen(false);
    };

    const handleSmoothScroll = (e, sectionId) => {
        e.preventDefault();
        const isMobile = window.innerWidth < 768;

        if (isMobile) {
            setIsMobileMenuOpen(false);
        }

        const performScroll = () => {
            const element = document.getElementById(sectionId);
            if (element) {
                // Adjust for sticky header
                const offset = 80;
                const bodyRect = document.body.getBoundingClientRect().top;
                const elementRect = element.getBoundingClientRect().top;
                const elementPosition = elementRect - bodyRect;
                const offsetPosition = elementPosition - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        };

        // If we're not on the home page, navigate there first
        if (location.pathname !== '/') {
            navigate('/');
            // Wait for navigation and potential menu closing
            setTimeout(performScroll, 300);
        } else {
            // Wait for mobile menu closing animation if on mobile
            if (isMobile) {
                setTimeout(performScroll, 350);
            } else {
                performScroll();
            }
        }
    };

    const handleLogoClick = (e) => {
        const isHome = location.pathname === '/';
        setIsMobileMenuOpen(false);

        if (isHome) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-bg-dark/80 backdrop-blur-xl">
            <nav className="w-full max-w-[1200px] mx-auto px-4 relative">
                <div className="flex items-center justify-between py-6 w-full">
                    <Link to="/" onClick={handleLogoClick} className="flex items-center gap-2">
                        <img src={logo} alt="Piper" className="h-8 w-auto" />
                    </Link>

                    <div className="hidden md:flex gap-8 items-center">
                        <a href="/#models" onClick={(e) => handleSmoothScroll(e, 'models')} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.models', 'Models')}</a>
                        <a href="/#assistant" onClick={(e) => handleSmoothScroll(e, 'assistant')} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.assistant', 'Assistant')}</a>
                        <a
                            href="/#opensource"
                            onClick={(e) => handleSmoothScroll(e, 'opensource')}
                            className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-text-muted hover:text-white hover:bg-white/10 transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            <span>{t('nav.opensource', 'Open source')}</span>
                        </a>
                        <a href="/#cases" onClick={(e) => handleSmoothScroll(e, 'cases')} className="text-text-muted text-sm hover:text-text-main transition-colors">{t('nav.use_cases', 'Use Cases')}</a>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden sm:flex">
                            <a
                                href="https://app.piper.my"
                                className="inline-flex items-center justify-center font-medium transition-all duration-300 gap-2 relative overflow-hidden z-10 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-transparent border border-white/10 text-text-main backdrop-blur-md hover:border-text-main hover:bg-white/5 h-11 px-8 rounded-lg"
                            >
                                {t('nav.try', 'Try now')}
                            </a>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                            {/* Burger Toggle - Now before Globe */}
                            <button
                                className="md:hidden text-text-muted hover:text-white p-2 border border-white/10 rounded-lg bg-white/5 transition-all active:scale-95 cursor-pointer"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                            </button>

                            {/* Language Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                    className="text-text-muted hover:text-white p-2 border border-white/10 rounded-lg bg-white/5 transition-all active:scale-95 flex items-center justify-center cursor-pointer"
                                >
                                    <Globe className="w-5 h-5" />
                                </button>

                                {/* Dropdown Menu */}
                                {isLangDropdownOpen && (
                                    <div className="absolute right-0 mt-2 w-40 bg-bg-card border border-white/10 rounded-lg shadow-lg overflow-hidden z-50">
                                        {languages.map((lang) => (
                                            <button
                                                key={lang.code}
                                                onClick={() => changeLanguage(lang.code)}
                                                className={`w-full px-4 py-2.5 text-left text-sm hover:bg-white/5 transition-colors cursor-pointer ${i18n.language === lang.code ? 'bg-white/5 text-white' : 'text-text-muted'
                                                    }`}
                                            >
                                                <span>{lang.name}</span>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="absolute top-full left-0 w-full md:hidden border-t border-white/10 bg-bg-card/95 backdrop-blur-xl overflow-hidden shadow-2xl"
                        >
                            <div className="grid grid-cols-1 gap-2 py-4 px-4">
                                <a
                                    href="/#models"
                                    onClick={(e) => handleSmoothScroll(e, 'models')}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all active:scale-[0.98]"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                                        <Boxes className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <span className="text-[15px] font-medium text-white">{t('nav.models', 'Models')}</span>
                                </a>

                                <a
                                    href="/#assistant"
                                    onClick={(e) => handleSmoothScroll(e, 'assistant')}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all active:scale-[0.98]"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center border border-purple-500/20 shrink-0">
                                        <Bot className="w-4 h-4 text-purple-400" />
                                    </div>
                                    <span className="text-[15px] font-medium text-white">{t('nav.assistant', 'Assistant')}</span>
                                </a>

                                <a
                                    href="/#opensource"
                                    onClick={(e) => handleSmoothScroll(e, 'opensource')}
                                    className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all active:scale-[0.98]"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center border border-orange-500/20 shrink-0">
                                            <Github className="w-4 h-4 text-orange-400" />
                                        </div>
                                        <span className="text-[15px] font-medium text-white">{t('nav.opensource', 'Open source')}</span>
                                    </div>
                                </a>

                                <a
                                    href="/#cases"
                                    onClick={(e) => handleSmoothScroll(e, 'cases')}
                                    className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/20 transition-all active:scale-[0.98]"
                                >
                                    <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                                        <LayoutPanelLeft className="w-4 h-4 text-emerald-400" />
                                    </div>
                                    <span className="text-[15px] font-medium text-white">{t('nav.use_cases', 'Use Cases')}</span>
                                </a>

                                <div className="pt-2">
                                    <a
                                        href="https://app.piper.my"
                                        className="inline-flex items-center justify-center font-medium transition-all duration-300 gap-2 relative overflow-hidden z-10 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-primary text-white hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(132,57,255,0.4)] h-11 px-8 rounded-lg w-full py-3 text-[15px] font-bold shadow-lg shadow-primary/20"
                                    >
                                        {t('nav.try', 'Try now')}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
    );
};

export default Navbar;
