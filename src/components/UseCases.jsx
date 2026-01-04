import React from 'react';
import { useTranslation } from 'react-i18next';
import { Play, Shirt, UserSquare2, ShieldAlert, ImagePlus, ArrowRightLeft, Video, BoxSelect, Maximize2, Eraser } from 'lucide-react';
import dressFactoryImg from '../assets/cases/dress-factory.webp';
import episodesImg from '../assets/cases/episodes.webp';

const UseCases = () => {
    const { t } = useTranslation();

    const pipelines = [
        { icon: Play, title: t("use_cases.cases.video_generation.title", "Video with episodes"), desc: t("use_cases.cases.video_generation.desc", "End-to-end video production from text prompts."), image: episodesImg },
        { icon: Shirt, title: t("use_cases.cases.dress_factory.title", "Dress factory"), desc: t("use_cases.cases.dress_factory.desc", "Virtual try-on and fashion generation."), image: dressFactoryImg },
        { icon: UserSquare2, title: t("use_cases.cases.face_swap.title", "Swap face at video"), desc: t("use_cases.cases.face_swap.desc", "High-quality face replacement in video footage.") },
        { icon: ShieldAlert, title: t("use_cases.cases.violations_detector.title", "Violations detector"), desc: t("use_cases.cases.violations_detector.desc", "Automated content moderation and safety checks.") },
        { icon: ImagePlus, title: t("use_cases.cases.photo_restore.title", "Restore all photos and animate"), desc: t("use_cases.cases.photo_restore.desc", "Restoration of old photos brought to life.") },
        { icon: ArrowRightLeft, title: t("use_cases.cases.compare_images.title", "Compare image AI models"), desc: t("use_cases.cases.compare_images.desc", "Side-by-side evaluation of different image generators.") },
        { icon: Video, title: t("use_cases.cases.compare_videos.title", "Compare video AI models"), desc: t("use_cases.cases.compare_videos.desc", "Benchmark performance of video generation models.") },
        { icon: Eraser, title: t("use_cases.cases.object_removal.title", "Object Removal"), desc: t("use_cases.cases.object_removal.desc", "Clean up images by removing unwanted objects.") },
        { icon: Maximize2, title: t("use_cases.cases.image_upscaling.title", "Image Upscaling"), desc: t("use_cases.cases.image_upscaling.desc", "Enhance resolution and detail of low-res images.") },
        { icon: BoxSelect, title: t("use_cases.cases.background_removal.title", "Background Removal"), desc: t("use_cases.cases.background_removal.desc", "Instantly isolate subjects from their background.") },
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
                    <div key={idx} className="glass-card group p-4 hover:scale-[1.02] hover:border-white/20 relative overflow-hidden flex flex-col justify-end min-h-[300px]">
                        {item.image && (
                            <>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bg-card/80 via-bg-card/50 to-bg-card/20" />
                            </>
                        )}
                        <div className="relative z-10 flex items-start gap-4">
                            <div className="icon-container group-hover:scale-110 backdrop-blur-md flex-shrink-0">
                                <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-0 text-white transition-colors shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                                    {item.title}
                                </h3>
                                <p className="text-text-muted leading-relaxed">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCases;
