import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '../lib/useIntersectionObserver';

const Lightbox = ({ isOpen, onClose, features, currentIndex, onNavigate }) => {
    const [mediaRef, isMediaVisible] = useIntersectionObserver({
        threshold: 0.1,
        freezeOnceVisible: true, // Lightbox media stays visible once loaded
    });

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            } else if (e.key === 'ArrowLeft') {
                onNavigate((currentIndex - 1 + features.length) % features.length);
            } else if (e.key === 'ArrowRight') {
                onNavigate((currentIndex + 1) % features.length);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        // Prevent body scroll when lightbox is open
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, currentIndex, features.length, onClose, onNavigate]);

    if (!isOpen || !features[currentIndex]) return null;

    const currentFeature = features[currentIndex];

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handlePrevious = () => {
        onNavigate((currentIndex - 1 + features.length) % features.length);
    };

    const handleNext = () => {
        onNavigate((currentIndex + 1) % features.length);
    };

    return createPortal(
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300"
            onClick={handleBackdropClick}
        >
            {/* Close Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-8 md:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 group z-10 cursor-pointer"
                aria-label="Close lightbox"
            >
                <X className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Navigation Arrows */}
            <button
                onClick={handlePrevious}
                className="absolute left-4 md:left-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center cursor-pointer"
                aria-label="Previous feature"
            >
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 md:right-8 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-200 hover:scale-110 hidden md:flex items-center justify-center cursor-pointer"
                aria-label="Next feature"
            >
                <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Content Container */}
            <div className="relative max-w-5xl w-full mx-4 md:mx-8 pt-16 md:pt-20 animate-in zoom-in duration-300">
                {/* Media Container */}
                <div ref={mediaRef} className="relative w-full aspect-video bg-bg-card rounded-2xl overflow-hidden border border-white/10 mb-6">
                    {(currentFeature.media?.endsWith('.mp4') || currentFeature.media?.endsWith('.webm')) && isMediaVisible ? (
                        <video
                            src={currentFeature.media}
                            className="w-full h-full object-contain"
                            autoPlay
                            loop
                            muted
                            playsInline
                        />
                    ) : currentFeature.media?.endsWith('.mp4') || currentFeature.media?.endsWith('.webm') ? (
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="text-white/50 text-sm">Loading...</span>
                        </div>
                    ) : (
                        <img
                            src={currentFeature.media}
                            alt={currentFeature.title}
                            className="w-full h-full object-contain"
                        />
                    )}
                </div>

                {/* Text Content */}
                <div className="text-center px-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        {currentFeature.title}
                    </h3>
                    <p className="text-base md:text-lg text-text-muted leading-relaxed max-w-3xl mx-auto">
                        {currentFeature.description}
                    </p>
                </div>

                {/* Dot Navigation */}
                <div className="flex items-center justify-center gap-2 mt-8">
                    {features.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => onNavigate(index)}
                            className={`transition-all duration-300 rounded-full cursor-pointer ${index === currentIndex
                                ? 'w-8 h-2 bg-primary'
                                : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to feature ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Navigation Hint */}
                <div className="md:hidden text-center mt-6 text-sm text-text-muted">
                    Swipe or use dots to navigate
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Lightbox;
