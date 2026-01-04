import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const CookieConsent = () => {
    const { t, i18n } = useTranslation();
    const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        // Check if user has already consented
        const consent = document.cookie
            .split('; ')
            .find(row => row.startsWith('cookie_consent='));

        if (!consent) {
            setShowBanner(true);
        }
    }, []);

    const handleAccept = () => {
        // Set cookie for 365 days
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 365);
        document.cookie = `cookie_consent=accepted; expires=${expiryDate.toUTCString()}; path=/`;
        setShowBanner(false);
    };

    return (
        <AnimatePresence>
            {showBanner && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-0 left-0 right-0 z-50 md:p-4"
                >
                    <div className="max-w-2xl mx-auto">
                        <div className="glass-card rounded-none md:rounded-lg p-3 md:p-4 flex flex-col md:flex-row items-start md:items-center gap-4 border border-white/10">
                            <div className="flex-1">
                                <p className="text-sm text-text-muted leading-relaxed">
                                    {t('cookie_consent.message', 'We use cookies to improve your experience on our site. By continuing to use this site, you agree to our use of cookies.')}
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 w-full md:w-auto">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 md:flex-none px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium"
                                >
                                    {t('cookie_consent.accept', 'Accept')}
                                </button>
                                <Link
                                    to={`/${i18n.language}/privacy-policy`}
                                    className="text-center text-xs text-text-muted hover:text-primary underline decoration-text-muted hover:decoration-primary transition-colors"
                                >
                                    {t('cookie_consent.learn_more', 'Learn more')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
