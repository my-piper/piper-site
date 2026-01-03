import React from 'react';
import { useTranslation } from 'react-i18next';
import { Building2, Users, Target, Mail, Code, Cpu, Infinity, Eye, Lightbulb, Handshake } from 'lucide-react';

const Company = () => {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen pt-20">
            {/* Mission Section */}
            <section className="section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Target className="w-5 h-5" />
                            <span className="text-sm font-semibold tracking-wider uppercase">{t('company.mission.label', 'Our Mission')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            {t('company.mission.title', 'Democratizing AI')}
                        </h2>
                        <p className="text-lg text-text-muted mb-6 leading-relaxed">
                            {t('company.mission.desc1', 'We believe that powerful AI tools should be accessible to everyone. Piper is built to empower creators, developers, and businesses to harness the full potential of artificial intelligence without barriers.')}
                        </p>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {t('company.mission.desc2', 'Our open-source, node-based platform makes it easy to combine multiple AI models, automate workflows, and create amazing content—all while maintaining full control over your data and infrastructure.')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {[
                            {
                                label: t('company.stats.opensource', 'Open Source'),
                                value: '100%',
                                icon: <Code className="w-6 h-6 text-blue-400" />,
                                color: 'from-blue-500/20 to-cyan-500/5'
                            },
                            {
                                label: t('company.stats.models', 'AI Models Supported'),
                                value: '50+',
                                icon: <Cpu className="w-6 h-6 text-primary" />,
                                color: 'from-primary/20 to-purple-500/5'
                            },
                            {
                                label: t('company.stats.community', 'Community Driven'),
                                value: t('company.stats.value_always', 'Always'),
                                icon: <Infinity className="w-6 h-6 text-emerald-400" />,
                                color: 'from-emerald-500/20 to-green-500/5'
                            }
                        ].map((stat, i) => (
                            <div key={i} className="group/stat relative">
                                <div className={`glow-wrapper ${stat.color}`}></div>
                                <div className="glass-card p-6 group-hover/stat:translate-y-[-2px] group-hover/stat:border-white/20">
                                    <div className="flex items-center gap-4">
                                        <div className="icon-container group-hover/stat:scale-110">
                                            {stat.icon}
                                        </div>
                                        <div>
                                            <div className="text-3xl font-bold text-gradient mb-1">
                                                {stat.value}
                                            </div>
                                            <div className="text-sm font-medium text-text-muted uppercase tracking-wider">
                                                {stat.label}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partnership section with Credentials */}
            <section className="section-container border-t border-white/5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1">
                        <div className="glass-card p-8 shadow-xl">
                            <h3 className="text-xl font-bold mb-6 text-white tracking-wide">
                                {t('company.credentials.title', 'Corporate Identity')}
                            </h3>
                            <div className="space-y-6">
                                <div className="flex flex-col">
                                    <span className="text-xs text-text-muted uppercase tracking-[0.2em] mb-2 font-semibold">
                                        {t('company.credentials.entity_label', 'Legal Entity')}
                                    </span>
                                    <span className="text-white text-lg font-medium">
                                        {t('company.credentials.entity_value', 'UNIHUB INFORMATION TECHNOLOGY CC')}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        {
                                            label: t('company.credentials.tax_id_label', 'Head Office'),
                                            value: t('company.credentials.tax_id_value', 'Office 306-091 Investment\nPark First, Dubai, 111485')
                                        },
                                        {
                                            label: t('company.credentials.reg_id_label', ''),
                                            value: t('company.credentials.reg_id_value', '')
                                        }
                                    ].filter(f => f.label && f.value).map((f, i) => (
                                        <div key={i} className="flex flex-col">
                                            <span className="text-xs text-text-muted uppercase tracking-[0.2em] mb-2 font-semibold">{f.label}</span>
                                            <span className="text-white leading-relaxed whitespace-pre-line font-medium">{f.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2">
                        <div className="flex items-center gap-2 text-primary mb-4">
                            <Users className="w-5 h-5" />
                            <span className="text-sm font-semibold tracking-wider uppercase">{t('company.partnership.label', 'Partnership')}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('company.partnership.title', 'Global Partnership')}</h2>
                        <p className="text-lg text-text-muted leading-relaxed">
                            {t('company.partnership.desc', 'We’re open to partnerships and collaboration, building seamless connections to drive lasting innovation in AI technology.')}
                        </p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section-container border-t border-white/5">
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-2 text-primary mb-4">
                        <Users className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('company.values.label', 'Our Values')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('company.values.title', 'What We Stand For')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            title: t('company.values.transparency.title', 'Transparency'),
                            description: t('company.values.transparency.desc', 'Open source at our core. Every line of code is visible and auditable.'),
                            color: 'from-blue-500 to-cyan-600',
                            iconBg: 'bg-blue-500/10',
                            icon: <Eye className="w-6 h-6 text-blue-400" />
                        },
                        {
                            title: t('company.values.innovation.title', 'Innovation'),
                            description: t('company.values.innovation.desc', 'Pushing boundaries with cutting-edge AI technology and creative solutions.'),
                            color: 'from-primary to-purple-600',
                            iconBg: 'bg-primary/10',
                            icon: <Lightbulb className="w-6 h-6 text-primary" />
                        },
                        {
                            title: t('company.values.community.title', 'Community'),
                            description: t('company.values.community.desc', 'Built by creators, for creators. Your feedback shapes our roadmap.'),
                            color: 'from-green-500 to-emerald-600',
                            iconBg: 'bg-green-500/10',
                            icon: <Handshake className="w-6 h-6 text-emerald-400" />
                        }
                    ].map((value, index) => (
                        <div key={index} className="relative group">
                            <div className={`glow-wrapper ${value.color}`}></div>
                            <div className="glass-card p-8 h-full hover:border-white/20 group-hover:scale-[1.02]">
                                <div className={`icon-container ${value.iconBg} mb-6 group-hover:scale-110 group-hover:rotate-3`}>
                                    {value.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{value.title}</h3>
                                <p className="text-text-muted leading-relaxed">{value.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-container border-t border-white/5">
                <div className="text-center">
                    <div className="flex items-center justify-center gap-2 text-primary mb-4">
                        <Mail className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('company.contact.label', 'Get in Touch')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('company.contact.title', 'Let\'s Build Together')}
                    </h2>
                    <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
                        {t('company.contact.desc', 'Have questions, feedback, or want to collaborate? We\'d love to hear from you.')}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto text-left">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-2">{t('company.contact.support_title', 'Email Support')}</h4>
                            <p className="text-text-muted mb-1">{t('company.contact.support_hours', 'Day and night')}</p>
                            <a href="mailto:support@piper.my" className="text-primary hover:underline font-medium">support@piper.my</a>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                            <h4 className="font-bold text-white mb-2">{t('company.contact.talk_title', 'Let\'s Talk')}</h4>
                            <p className="text-text-muted mb-1">{t('company.contact.talk_hours', '9am – 6pm')}</p>
                            <span className="text-primary font-medium">+49 176 866-20-176</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a
                            href="https://github.com/My-Piper/Piper"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://x.com/piper_my_ai"
                            target="_blank"
                            rel="noreferrer"
                            className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-bold transition-all transform hover:scale-105"
                        >
                            Twitter (X)
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Company;
