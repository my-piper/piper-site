import React from 'react';
import { useTranslation } from 'react-i18next';
import { DollarSign, Zap, Key, Cloud } from 'lucide-react';

const PayAsYouGo = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: DollarSign,
            title: t('payasyougo.no_subscription.title', 'No Subscriptions'),
            description: t('payasyougo.no_subscription.desc', 'Pay as you go just from $1. Full transparent pricing. No any stupid credits or limits.'),
            color: 'from-green-500 to-emerald-600',
            iconBg: 'bg-green-500/10',
            iconColor: 'text-green-400'
        },
        {
            icon: Zap,
            title: t('payasyougo.cheapest.title', 'The Cheapest AI API'),
            description: t('payasyougo.cheapest.desc', 'Which can be found for image & video generation, LLMs and more.'),
            color: 'from-primary to-purple-600',
            iconBg: 'bg-primary/10',
            iconColor: 'text-primary'
        },
        {
            icon: Key,
            title: t('payasyougo.own_keys.title', 'Use Your Own API Keys'),
            description: t('payasyougo.own_keys.desc', 'Don\'t pay at all and use your own API keys for Fal, Replicate or ArtWorks.'),
            color: 'from-blue-500 to-cyan-600',
            iconBg: 'bg-blue-500/10',
            iconColor: 'text-blue-400'
        }
    ];

    return (
        <section id="pricing" className="section-container border-t border-white/5">
            <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 text-primary mb-4">
                    <Cloud className="w-5 h-5" />
                    <span className="text-sm font-semibold tracking-wider uppercase">{t('payasyougo.label', 'Cloud version')}</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    {t('payasyougo.title', 'Pay As You Go')}
                </h2>
                <p className="text-lg text-text-muted max-w-2xl mx-auto">
                    {t('payasyougo.subtitle', 'Flexible pricing that scales with your needs without hidden fees and commitments.')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="relative group"
                        >
                            {/* Gradient Glow Effect */}
                            <div className={`glow-wrapper ${feature.color}`}></div>

                            {/* Card */}
                            <div className="glass-card p-8 h-full flex flex-col items-center text-center hover:border-white/20 group-hover:scale-[1.02]">
                                {/* Icon */}
                                <div className={`icon-container ${feature.iconBg} w-16 h-16 mb-6 group-hover:scale-110`}>
                                    <Icon className={`w-8 h-8 ${feature.iconColor}`} />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold mb-3 text-white">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="text-text-muted leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default PayAsYouGo;
