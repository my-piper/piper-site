import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Sparkles, Send, Bot, User, Film, Wand2, Image as ImageIcon, Zap, Lightbulb, Settings } from 'lucide-react';

const AiAssistant = () => {
    const { t } = useTranslation();

    const messages = [
        { role: 'user', text: t('assistant.msg_user', "Create a pipeline that generates a video from a text description and adds a soundtrack.") },
        { role: 'ai', text: t('assistant.msg_ai', "I've created a pipeline for you: Text Prompt -> Video Gen -> Audio Gen -> Combiner.") }
    ];

    const features = [
        {
            icon: Zap,
            title: t('assistant.features.text_to_graph', "Instant Text-to-Graph generation"),
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400"
        },
        {
            icon: Lightbulb,
            title: t('assistant.features.model_suggestions', "Context-aware model suggestions"),
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400"
        },
        {
            icon: Settings,
            title: t('assistant.features.parameter_optimization', "Automatic parameter optimization"),
            iconBg: "bg-green-500/10",
            iconColor: "text-green-400"
        }
    ];

    return (
        <section id="assistant" className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Visual Interface */}
                <div className="order-2 lg:order-1 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
                    <div className="glass-card overflow-hidden shadow-2xl h-[450px] flex flex-col bg-[#0d1117] group-hover:scale-[1.01]">

                        {/* Chat Header */}
                        <div className="px-4 py-3 border-b border-white/10 bg-white/5 flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-white">{t('assistant.chat_header', 'AI Assistant')}</span>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === 'user' ? 'bg-white/10' : 'bg-purple-500/20 text-purple-400'}`}>
                                        {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                                    </div>
                                    <div className={`rounded-2xl px-4 py-2.5 max-w-[80%] text-sm leading-relaxed ${msg.role === 'user' ? 'bg-white/10 text-white rounded-tr-sm' : 'bg-purple-500/10 text-purple-100 rounded-tl-sm border border-purple-500/20'}`}>
                                        {msg.text}
                                    </div>
                                </div>
                            ))}

                            {/* Generation Animation Mock */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                                className="ml-11 bg-white/5 border border-white/10 rounded-xl p-3 w-fit"
                            >
                                <div className="flex items-center gap-2 mb-2">
                                    <span className="text-xs text-text-muted uppercase tracking-wider font-semibold">{t('assistant.generating', 'Generating Pipeline...')}</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="w-16 h-10 bg-white/10 rounded border border-white/10 flex items-center justify-center">
                                        <Wand2 className="w-4 h-4 text-gray-400" />
                                    </div>
                                    <div className="w-4 h-1 border-t-2 border-dashed border-white/20 self-center"></div>
                                    <div className="w-16 h-10 bg-blue-500/20 rounded border border-blue-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                        <Film className="w-4 h-4 text-blue-400" />
                                    </div>
                                    <div className="w-4 h-1 border-t-2 border-dashed border-white/20 self-center"></div>
                                    <div className="w-16 h-10 bg-purple-500/20 rounded border border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                                        <ImageIcon className="w-4 h-4 text-purple-400" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Input Area */}
                        <div className="p-4 border-t border-white/10 bg-white/5">
                            <div className="relative">
                                <input
                                    type="text"
                                    disabled
                                    placeholder={t('assistant.placeholder', 'Describe your pipeline...')}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg pl-4 pr-10 py-2.5 text-sm text-text-muted focus:outline-none cursor-not-allowed opacity-70"
                                />
                                <Send className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/20" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="order-1 lg:order-2">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {t('assistant.title', 'Design pipelines')} <br />
                        <span className="text-gradient">{t('assistant.subtitle', 'with AI Assistant')}</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {t('assistant.desc', 'Skip the learning curve. Simply describe what you want to build, and our AI Assistant constructs the node workflow for you. Iterate and refine with natural language.')}
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

            </div>
        </section>
    );
};

export default AiAssistant;
