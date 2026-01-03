import React from 'react';
import { useTranslation } from 'react-i18next';
import Workflow from './Workflow';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section className="relative w-full flex flex-col items-center justify-center text-center pt-12 md:pt-24 pb-0 overflow-hidden">
            <div className="w-full max-w-[1200px] mx-auto px-4 z-10">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
                    <span className="text-gradient">{t('hero.title_part1', 'AI canvas')}</span> {t('hero.title_part2', 'for creativity')}<br /> {t('hero.title_part3', 'and automation')}
                </h1>
                <p className="text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-loose">
                    {t('hero.subtitle', 'Step by step node-based platform where all AI models work together, unifying creation, automation, and professional editing tools.')}
                </p>

                <div className="mt-16 w-full h-auto max-md:min-h-[1030px] bg-gradient-to-b from-white/5 to-transparent border border-white/10 rounded-2xl relative flex flex-col items-center p-6 md:p-8 gap-8 overflow-hidden">
                    <div className="z-20">
                        <span className="text-sm font-medium text-text-muted bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                            {t('hero.animation_title', 'Video with multiple episodes')}
                        </span>
                    </div>

                    <Workflow />

                    <div className="z-30 w-full flex justify-center mt-auto pb-4">
                        <a
                            href="https://app.piper.my"
                            className="inline-flex items-center justify-center transition-all duration-300 gap-2 relative overflow-hidden z-10 disabled:opacity-50 disabled:pointer-events-none active:scale-95 bg-white text-black hover:bg-white/90 px-8 py-3 rounded-full font-medium text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
                        >
                            {t('hero.run_pipeline', 'Run pipeline')}
                        </a>
                    </div>
                    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,157,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_20%,rgba(112,0,255,0.08)_0%,transparent_40%)]"></div>
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(circle_at_center,black_40%,transparent_100%)]"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
