import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Github, Server, Key, FileCode, Sparkles, Code, Package, Zap } from 'lucide-react';
import Lightbox from './Lightbox';

// Import feature images
import pipelineFormatImg from '../assets/opensource/pipeline_format.png';
import designNodesImg from '../assets/opensource/design_nodes.png';
import jsCodeImg from '../assets/opensource/js_code.png';
import nodePackagesImg from '../assets/opensource/node_packages.png';
import hiloadImg from '../assets/opensource/hiload.png';

const OpenSource = () => {
    const { t } = useTranslation();
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

    const features = [
        {
            icon: FileCode,
            title: t('opensource.features.pipeline_format', "Opened pipeline format"),
            description: t('opensource.features.pipeline_format_desc', "Work with open JSON pipeline format. Easily export, share and integrate your workflows into any systems."),
            media: pipelineFormatImg,
            color: "from-blue-500 to-cyan-600",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400"
        },
        {
            icon: Sparkles,
            title: t('opensource.features.design_nodes', "Design own nodes with LLMs"),
            description: t('opensource.features.design_nodes_desc', "Use LLMs to generate custom nodes. Just describe the functionality and AI will create the block for you."),
            media: designNodesImg,
            color: "from-purple-500 to-pink-600",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400"
        },
        {
            icon: Code,
            title: t('opensource.features.js_code', "Write and run JS code instantly"),
            description: t('opensource.features.js_code_desc', "Built-in JavaScript editor lets you write and execute code directly in the pipeline for any custom logic."),
            media: jsCodeImg,
            color: "from-green-500 to-emerald-600",
            iconBg: "bg-green-500/10",
            iconColor: "text-green-400"
        },
        {
            icon: Package,
            title: t('opensource.features.node_packages', "Node packages distribution"),
            description: t('opensource.features.node_packages_desc', "Share your blocks with the community or use ready-made solutions from the growing package library."),
            media: nodePackagesImg,
            color: "from-orange-500 to-red-600",
            iconBg: "bg-orange-500/10",
            iconColor: "text-orange-400"
        },
        {
            icon: Zap,
            title: t('opensource.features.hiload', "Hi-load and scale ready"),
            description: t('opensource.features.hiload_desc', "Architecture designed to handle large volumes of data with horizontal scaling."),
            media: hiloadImg,
            color: "from-yellow-500 to-orange-600",
            iconBg: "bg-yellow-500/10",
            iconColor: "text-yellow-400"
        }
    ];

    const handleFeatureClick = (index) => {
        setCurrentFeatureIndex(index);
        setLightboxOpen(true);
    };

    return (
        <section id="opensource" className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Text Content */}
                <div>
                    <div className="flex items-center gap-2 text-primary mb-4">
                        <Github className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('opensource.label', 'Open Source')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('opensource.title', 'Free to use &')} <br />
                        <span className="text-gradient">{t('opensource.subtitle', 'fully self-hosted')}</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {t('opensource.desc', 'Keep full control over your data and infrastructure. Run Piper locally or on your private cloud. Simply bring your own API keys from your favorite providers.')}
                    </p>

                    <div className="flex flex-wrap gap-4 mb-10">
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                            <Key className="w-4 h-4 text-text-muted" />
                            <span className="text-sm">{t('opensource.badges.opensource', 'Open Source')}</span>
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
                            <Server className="w-4 h-4 text-text-muted" />
                            <span className="text-sm">{t('opensource.badges.docker', 'Docker Deploy')}</span>
                        </div>
                    </div>
                </div>

                {/* Features List Visual */}
                <div className="space-y-4">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="flex items-center gap-3 group cursor-pointer hover:bg-white/5 p-3 rounded-lg transition-all duration-300"
                                onClick={() => handleFeatureClick(index)}
                            >
                                {/* Icon */}
                                <div className={`icon-container ${feature.iconBg} w-10 h-10 group-hover:scale-110`}>
                                    <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-base font-medium text-white/90 group-hover:text-white">
                                    {feature.title}
                                </h3>
                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Lightbox */}
            <Lightbox
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                features={features}
                currentIndex={currentFeatureIndex}
                onNavigate={setCurrentFeatureIndex}
            />
        </section>
    );
};

export default OpenSource;

