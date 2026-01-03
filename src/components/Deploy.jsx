import React from 'react';
import { useTranslation } from 'react-i18next';
import { Rocket, Terminal, Zap, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Deploy = () => {
    const { t } = useTranslation();

    return (
        <section id="deploy" className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Text Content */}
                <div className="order-1">
                    <div className="flex items-center gap-2 text-green-400 mb-4">
                        <Rocket className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('deploy.label', 'Deploy')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('deploy.title', 'Publish pipelines')} <br />
                        <span className="text-gradient">{t('deploy.subtitle', 'to API in seconds')}</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {t('deploy.desc', 'Deploy your pipelines to production with a single command. Get instant API endpoints that scale automatically. No infrastructure setup, no DevOps headaches.')}
                    </p>

                    <ul className="space-y-4">
                        {[
                            { icon: Zap, text: t('deploy.features.fast_deploy', "Deploy in under 3 seconds") },
                            { icon: Globe, text: t('deploy.features.auto_scaling', "Auto-scaling & high-load ready") },
                            { icon: CheckCircle2, text: t('deploy.features.monitoring', "Built-in monitoring & metrics") }
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <item.icon className="w-5 h-5 text-primary mt-0.5" />
                                <span className="text-text-muted">{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual Content */}
                <div className="order-2 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-green-500 to-blue-500 rounded-2xl blur opacity-20"></div>
                    <div className="glass-card relative overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-300 bg-[#0d1117]">

                        {/* Browser Header */}
                        <div className="h-8 bg-white/10 border-b border-white/10 flex items-center px-3 gap-2">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-[10px] text-text-muted font-mono">app.piper.my/deploy</div>
                            </div>
                        </div>

                        {/* App Content */}
                        <div className="p-8 bg-gradient-to-b from-white/5 to-transparent">
                            {/* Form Header */}
                            <div className="mb-6">
                                <h3 className="text-2xl font-bold text-white mb-2">{t('deploy.form.title', 'Publish')}</h3>
                                <p className="text-sm text-text-muted">{t('deploy.form.desc', 'Publish your pipeline to production mode')}</p>
                            </div>

                            {/* Form */}
                            <div className="space-y-4">
                                {/* Input Field */}
                                <div>
                                    <label className="block text-sm font-medium text-white/90 mb-2">
                                        {t('deploy.form.slug', 'Slug (URL path)')}
                                    </label>
                                    <input
                                        type="text"
                                        value="generate-video-v1"
                                        disabled
                                        className="w-full bg-black/30 border border-white/20 rounded-lg px-4 py-3 text-white font-mono focus:outline-none focus:border-primary/50 transition-colors cursor-not-allowed"
                                    />
                                </div>

                                {/* Deploy Button */}
                                <button
                                    disabled
                                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg transition-all shadow-lg shadow-primary/20 cursor-not-allowed opacity-90 flex items-center justify-center gap-2"
                                >
                                    <Rocket className="w-5 h-5" />
                                    {t('deploy.form.button', 'Deploy to production')}
                                </button>
                            </div>

                            {/* Success Message */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
                            >
                                <div className="flex items-center gap-2 text-green-400 text-sm mb-2">
                                    <CheckCircle2 className="w-4 h-4" />
                                    <span className="font-semibold">{t('deploy.form.success', 'Successfully deployed!')}</span>
                                </div>
                                <div className="text-text-muted text-xs space-y-1">
                                    <div className="font-mono">https://app.piper.my/api/generate-video-v1</div>
                                </div>
                            </motion.div>

                            {/* API Example */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className="mt-6 pt-6 border-t border-white/10"
                            >
                                <div className="text-text-muted text-xs mb-2">{t('deploy.form.try_now', 'Try it now:')}</div>
                                <div className="bg-black/30 p-3 rounded border border-white/5 font-mono text-xs">
                                    <div className="text-purple-400">curl</div>
                                    <div className="text-white ml-2">-X POST \</div>
                                    <div className="text-blue-400 ml-2">https://app.piper.my/api/generate-video-v1 \</div>
                                    <div className="text-white ml-2">-d '{`{"prompt": "..."}`}'</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Deploy;
