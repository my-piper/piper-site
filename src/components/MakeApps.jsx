import React from 'react';
import { useTranslation } from 'react-i18next';
import { Code, Smartphone, Globe, Blocks, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const MakeApps = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: Smartphone,
            title: t('makeapps.features.ui', "Auto-generated UI"),
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400"
        },
        {
            icon: Globe,
            title: t('makeapps.features.access', "Access via link"),
            iconBg: "bg-green-500/10",
            iconColor: "text-green-400"
        },
        {
            icon: Blocks,
            title: t('makeapps.features.embedding', "Embedding into web page"),
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400"
        }
    ];

    return (
        <section id="makeapps" className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-2 text-blue-400 mb-4">
                        <Code className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('makeapps.label', 'Build Apps')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {t('makeapps.title', 'Make apps')} <br />
                        <span className="text-gradient">{t('makeapps.subtitle', 'from pipelines')}</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {t('makeapps.desc', 'Transform your AI pipelines into production-ready applications. Share your apps via link with auto-generated UI.')}
                    </p>

                    <ul className="space-y-4">
                        {features.map((feature, i) => {
                            const Icon = feature.icon;
                            return (
                                <li key={i} className="flex items-center gap-3 group">
                                    <div className={`icon-container ${feature.iconBg} w-10 h-10 group-hover:scale-110`}>
                                        <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                                    </div>
                                    <span className="text-base font-medium text-white/90">{feature.title}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                <div className="order-2 lg:order-1 relative group">
                    <div className="glow-wrapper from-blue-500 to-purple-500"></div>
                    <div className="glass-card overflow-hidden shadow-2xl h-[400px] flex items-center justify-center p-8 bg-[#0d1117] group-hover:scale-[1.02]">

                        {/* Transformation Visual */}
                        <div className="flex items-center gap-4 md:gap-8 w-full justify-center">

                            {/* Source: Pipeline Node */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="w-32 h-40 bg-white/5 border border-white/10 rounded-xl p-3 flex flex-col gap-2 relative"
                            >
                                <div className="absolute -top-3 -left-3 bg-gray-800 text-xs px-2 py-1 rounded border border-white/10">{t('makeapps.visual.pipeline', 'Pipeline')}</div>
                                <div className="w-full h-2 bg-white/10 rounded-full mt-2"></div>
                                <div className="flex justify-between mt-2">
                                    <div className="w-8 h-8 rounded border border-white/10 bg-blue-500/20"></div>
                                    <div className="w-8 h-8 rounded border border-white/10 bg-purple-500/20"></div>
                                </div>
                                <div className="flex-1 flex items-center justify-center">
                                    <div className="w-0.5 h-full bg-white/10 absolute left-1/2 -translate-x-1/2"></div>
                                </div>
                                <div className="w-full h-8 bg-white/10 rounded border border-white/10 mt-auto"></div>
                            </motion.div>

                            {/* Arrow */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                <ArrowRight className="w-8 h-8 text-text-muted animate-pulse" />
                            </motion.div>

                            {/* Destination: App UI */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="w-40 h-56 bg-white/5 border border-white/10 rounded-xl shadow-[0_0_30px_rgba(132,57,255,0.15)] flex flex-col overflow-hidden relative"
                            >
                                <div className="absolute -top-3 -right-3 bg-primary text-white text-xs px-2 py-1 rounded shadow-lg">{t('makeapps.visual.web_app', 'Web App')}</div>
                                {/* Browser Header */}
                                <div className="h-6 bg-white/10 border-b border-white/10 flex items-center px-2 gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                    <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                                </div>
                                {/* App Content */}
                                <div className="p-3 flex flex-col gap-3">
                                    <div className="h-4 w-2/3 bg-white/10 rounded"></div>
                                    <div className="h-20 w-full bg-black/20 rounded border border-white/5 p-2">
                                        <div className="text-[8px] text-text-muted">{t('makeapps.visual.placeholder', 'Enter prompt...')}</div>
                                    </div>
                                    <div className="mt-auto">
                                        <button className="w-full py-1.5 bg-primary rounded text-[10px] font-medium text-white shadow-lg shadow-primary/20">
                                            {t('makeapps.visual.button', 'Generate Video')}
                                        </button>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default MakeApps;
