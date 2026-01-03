import React from 'react';
import { useTranslation } from 'react-i18next';
import { Crop, Film, RefreshCcw, Sliders, Wand2, Maximize2, Move } from 'lucide-react';
import flux from '../assets/models/flux.webp';

const EditingTools = () => {
    const { t } = useTranslation();

    const features = [
        {
            icon: Crop,
            title: t('editing_tools.features.cropper', 'Smart crop & composer'),
            color: "from-pink-500 to-rose-600",
            iconBg: "bg-pink-500/10",
            iconColor: "text-pink-400"
        },
        {
            icon: Film,
            title: t('editing_tools.features.video_editor', 'Video editor with timeline'),
            color: "from-violet-500 to-purple-600",
            iconBg: "bg-violet-500/10",
            iconColor: "text-violet-400"
        },
        {
            icon: RefreshCcw,
            title: t('editing_tools.features.converters', 'Format conversion'),
            color: "from-blue-500 to-indigo-600",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400"
        },
        {
            icon: Sliders,
            title: t('editing_tools.features.audio_tools', 'Audio mixer & effects'),
            color: "from-amber-500 to-orange-600",
            iconBg: "bg-amber-500/10",
            iconColor: "text-amber-400"
        }
    ];

    return (
        <section id="editing-tools" className="section-container border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                {/* Visual Content - Left side to alternate with Open Source */}
                <div className="order-2 lg:order-1 relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 rounded-2xl blur opacity-20"></div>

                    {/* Glass Card */}
                    <div className="glass-card relative overflow-hidden shadow-2xl group-hover:scale-[1.01] transition-transform duration-300 bg-[#0d1117] min-h-[400px] flex flex-col">
                        {/* Browser Header */}
                        <div className="h-8 bg-white/10 border-b border-white/10 flex items-center px-3 gap-2 shrink-0">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
                            <div className="flex-1 flex items-center justify-center">
                                <div className="text-[10px] text-text-muted font-mono">{t('editing_tools.node_title', 'Image Editor Node')}</div>
                            </div>
                        </div>

                        {/* App Content Placeholder */}
                        <div className="flex-1 p-6 flex flex-col relative overflow-hidden">
                            {/* Editor Toolbar */}
                            <div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
                                <div className="p-1.5 rounded bg-white/5 text-white/70 hover:bg-white/10 transition-colors cursor-pointer"><Crop className="w-4 h-4" /></div>
                                <div className="p-1.5 rounded bg-white/5 text-white/70 hover:bg-white/10 transition-colors cursor-pointer"><Sliders className="w-4 h-4" /></div>
                                <div className="h-4 w-px bg-white/10 mx-1"></div>
                                <div className="text-sm text-text-muted">{t('editing_tools.editor_view', 'Editor View')}</div>
                                <div className="text-xs text-text-muted font-mono">1024x1024</div>
                            </div>

                            {/* Main Canvas Area */}
                            <div className="flex-1 bg-[#1a1d21] rounded-lg border border-white/5 relative flex items-center justify-center group/canvas overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center p-8">
                                    <div className="relative w-full h-full max-w-[280px] max-h-[280px] aspect-square shadow-2xl">
                                        {/* Image */}
                                        <img
                                            src={flux}
                                            alt="Editable content"
                                            className="w-full h-full object-cover rounded-sm opacity-50 grayscale-[0.3]"
                                        />

                                        {/* Crop Overlay - The "Clear" Area */}
                                        <div className="absolute top-[15%] left-[15%] right-[25%] bottom-[25%] z-10 box-content shadow-[0_0_0_9999px_rgba(0,0,0,0.7)] group-hover/canvas:shadow-[0_0_0_9999px_rgba(0,0,0,0.5)] transition-all duration-300">
                                            {/* Active Image Segment */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <img
                                                    src={flux}
                                                    alt="Cropped content"
                                                    className="absolute w-[166%] h-[166%] max-w-none max-h-none object-cover -top-[25%] -left-[25%] grayscale-0 brightness-110"
                                                />
                                            </div>

                                            {/* Crop Border & Grid */}
                                            <div className="absolute inset-0 border-2 border-primary/80 pointer-events-none">
                                                {/* Thirds Grid */}
                                                <div className="absolute inset-0 flex flex-col">
                                                    <div className="flex-1 border-b border-white/20"></div>
                                                    <div className="flex-1 border-b border-white/20"></div>
                                                    <div className="flex-1"></div>
                                                </div>
                                                <div className="absolute inset-0 flex">
                                                    <div className="flex-1 border-r border-white/20"></div>
                                                    <div className="flex-1 border-r border-white/20"></div>
                                                    <div className="flex-1"></div>
                                                </div>

                                                {/* Corner Handles */}
                                                <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm shadow-sm"></div>
                                                <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm shadow-sm"></div>
                                                <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm shadow-sm"></div>
                                                <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-primary rounded-sm shadow-sm"></div>
                                            </div>

                                            {/* Size Label */}
                                            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-[10px] px-2 py-0.5 rounded font-mono border border-white/10 opacity-0 group-hover/canvas:opacity-100 transition-opacity whitespace-nowrap">
                                                800 × 600
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Controls */}
                                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent flex justify-center gap-2 opacity-0 group-hover/canvas:opacity-100 transition-opacity duration-300">
                                    <button className="p-1.5 rounded-md bg-white/10 hover:bg-white/20 text-white/90 transition-colors">
                                        <Maximize2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-1.5 rounded-md bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20 transition-all">
                                        <Crop className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Text Content - Right side */}
                <div className="order-1 lg:order-2">
                    <div className="flex items-center gap-2 text-pink-400 mb-4">
                        <Wand2 className="w-5 h-5" />
                        <span className="text-sm font-semibold tracking-wider uppercase">{t('editing_tools.label', 'Tools')}</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        {t('editing_tools.title', 'Built-in')} <br />
                        <span className="text-gradient">{t('editing_tools.subtitle', 'editors')}</span>
                    </h2>
                    <p className="text-lg text-text-muted mb-8 leading-relaxed">
                        {t('editing_tools.desc', 'Not just generation. Use powerful editing tools directly in the browser. Each node is a mini-app with its own interface.')}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors group">
                                    <div className={`icon-container ${feature.iconBg} w-10 h-10 shrink-0 group-hover:scale-110`}>
                                        <Icon className={`w-5 h-5 ${feature.iconColor}`} />
                                    </div>
                                    <span className="text-sm font-medium text-white/90">{feature.title}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EditingTools;
