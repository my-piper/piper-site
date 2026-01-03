import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Shirt, UserSquare2, ShieldAlert, ImagePlus, ArrowRightLeft, Video, BoxSelect, Maximize2, Eraser } from 'lucide-react';

const UseCases = () => {
    const { t } = useTranslation();

    const pipelines = [
        { icon: Play, title: "Generate long AI videos with sound", desc: "End-to-end video production from text prompts." },
        { icon: Shirt, title: "Dress factory", desc: "Virtual try-on and fashion generation." },
        { icon: UserSquare2, title: "Swap face at video", desc: "High-quality face replacement in video footage." },
        { icon: ShieldAlert, title: "Violations detector", desc: "Automated content moderation and safety checks." },
        { icon: ImagePlus, title: "Restore all photos and animate", desc: "Restoration of old photos brought to life." },
        { icon: ArrowRightLeft, title: "Compare image AI models", desc: "Side-by-side evaluation of different image generators." },
        { icon: Video, title: "Compare video AI models", desc: "Benchmark performance of video generation models." },
        // Filling up to 10
        { icon: Eraser, title: "Object Removal", desc: "Clean up images by removing unwanted objects." },
        { icon: Maximize2, title: "Image Upscaling", desc: "Enhance resolution and detail of low-res images." },
        { icon: BoxSelect, title: "Background Removal", desc: "Instantly isolate subjects from their background." },
    ];

    return (
        <section id="cases" className="section-container border-t border-white/5">
            <div className="flex flex-col items-center mb-16 text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {t('use_cases.title', 'Top 10 pipelines')}
                </h2>
                <p className="text-lg text-text-muted max-w-2xl">
                    {t('use_cases.description', 'Explore the most popular workflows built by the community.')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pipelines.map((item, idx) => (
                    <div key={idx} className="glass-card group p-8 hover:scale-[1.02] hover:border-white/20">
                        <div className="icon-container mb-6 group-hover:scale-110">
                            <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-text-muted leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCases;
