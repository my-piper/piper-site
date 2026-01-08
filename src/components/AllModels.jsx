import { useTranslation } from 'react-i18next';
import { Cpu, Layers, Sparkles, Video as VideoIcon, Palette, Music, Image as ImageIcon, Box, Bot, Globe, Zap, Layout, Type } from 'lucide-react';
import { useIntersectionObserver } from '../lib/useIntersectionObserver';
import openai from '../assets/models/openai.webp';
import luma from '../assets/models/luma-ai.webm';
import wan from '../assets/models/wan.webm';
import flux from '../assets/models/flux.webp';
import stability from '../assets/models/stability.webp';
import recraft from '../assets/models/recraft.webp';
import runway from '../assets/models/runway.webm';
import veo3 from '../assets/models/veo3.webm';
import claude from '../assets/models/claude.webp';
import suno from '../assets/models/suno.webp';
import rodin from '../assets/models/rodin.webm';
import kling from '../assets/models/kling.webm';

const ModelCard = ({ producer, index }) => {
    const [ref, isVisible] = useIntersectionObserver({
        threshold: 0.1,
        rootMargin: '100px',
    });

    return (
        <div
            key={index}
            className="group relative bg-bg-card border border-white/10 rounded-xl shadow-2xl backdrop-blur-md p-3 flex flex-col gap-3 min-h-[200px] hover:scale-[1.02] hover:border-white/20 transition-all duration-300"
        >
            {/* Header */}
            <div className="flex items-center justify-between mb-1 relative z-10">
                <span className="text-xs font-bold text-white uppercase tracking-wider">{producer.name}</span>
                <div className="flex items-center gap-1.5">
                    {producer.icons.map((Icon, i) => (
                        <div key={i} className={`p-1.5 rounded-md bg-white/5 ${producer.color || 'text-primary'}`}>
                            <Icon className="w-4 h-4" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Media/Content Box */}
            <div ref={ref} className="relative flex-1 w-full bg-black/40 rounded-lg border border-white/5 overflow-hidden group/media">
                {producer.video && isVisible && (
                    <video
                        src={producer.video}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/media:opacity-80 transition-opacity duration-500"
                    />
                )}
                {producer.image && (
                    <img
                        src={producer.image}
                        alt={producer.name}
                        className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover/media:opacity-80 transition-opacity duration-500"
                    />
                )}

                {/* Overlay for models */}
                <div className="relative z-10 p-3 h-full flex flex-col justify-between">
                    <p className="text-[10px] text-text-muted leading-tight line-clamp-2 mb-2">
                        {producer.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto">
                        {producer.models.map((model, idx) => (
                            <span
                                key={idx}
                                className="text-[9px] font-medium text-white/70 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md"
                            >
                                {model}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const AllModels = () => {
    const { t } = useTranslation();

    const producers = [
        {
            name: "Alibaba",
            desc: "Global scale AI",
            models: ["Wan 2.5/2.6", "Qwen2"],
            video: wan,
            icons: [VideoIcon, ImageIcon, Type],
            color: "text-blue-400"
        },
        {
            name: "Black Forest Labs",
            desc: "SOTA Open weights",
            models: ["FLUX Pro", "FLUX Context"],
            image: flux,
            icons: [ImageIcon],
            color: "text-purple-400"
        },
        {
            name: "Stability AI",
            desc: "Open source visual media",
            models: ["Stable Diffusion 3.5", "Stable Audio 2"],
            image: stability,
            icons: [ImageIcon, Music],
            color: "text-orange-400"
        },
        {
            name: "Recraft",
            desc: "Vector design",
            models: ["Recraft V3", "Recraft 20B"],
            image: recraft,
            icons: [ImageIcon],
            color: "text-pink-400"
        },
        {
            name: "Runway",
            desc: "Generative video",
            models: ["Gen-3 Alpha", "Gen-2", "Act-One"],
            video: runway,
            icons: [VideoIcon],
            color: "text-blue-500"
        },
        {
            name: "Luma AI",
            desc: "Next-gen interactive media",
            models: ["Dream Machine", "Ray 2", "Photon"],
            video: luma,
            icons: [VideoIcon, ImageIcon],
            color: "text-yellow-400"
        },
        {
            name: "OpenAI",
            desc: "Pioneering generative AI",
            models: ["GPT-5", "Sora", "DALL-E 3"],
            image: openai,
            icons: [Type, ImageIcon, VideoIcon],
            color: "text-green-400"
        },
        {
            name: "Google DeepMind",
            desc: "Multimodal intelligence",
            models: ["Veo 3", "Nano Banana", "Gemini 2.5"],
            video: veo3,
            icons: [Type, VideoIcon],
            color: "text-blue-300"
        },
        {
            name: "Anthropic",
            desc: "Constitutional AI",
            models: ["Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Claude 3 Opus"],
            image: claude,
            icons: [Type, ImageIcon],
            color: "text-orange-300"
        },
        {
            name: "Suno",
            desc: "Audio intelligence",
            models: ["Suno v4", "Suno v3.5"],
            image: suno,
            icons: [Music],
            color: "text-pink-300"
        },
        {
            name: "Rodin AI",
            desc: "3D generation",
            models: ["Gen-2", "Avatar 0.7"],
            icons: [Box],
            video: rodin,
            color: "text-purple-300"
        },
        {
            name: "Kling AI",
            desc: "Create stunning AI Videos",
            models: ["Kling 2.6", "Lip Sync"],
            icons: [VideoIcon],
            video: kling,
            color: "text-red-400"
        }
    ];

    return (
        <section id="models" className="section-container pb-0 md:pb-0">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">{t('models.title_part1', 'All models')} <span className="text-gradient">{t('models.title_part2', 'in one place')}</span></h2>
                <p className="text-lg text-text-muted">{t('models.subtitle', 'When all models work together in a coordinated manner, and each AI unit becomes an integral part of the overall process.')}</p>
                <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-6">
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-purple-500/10 text-purple-400 border border-purple-500/20">{t('models.tags.image', 'Generate Images')}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">{t('models.tags.video', 'Video')}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-500/10 text-orange-400 border border-orange-500/20">{t('models.tags.audio', 'Audio')}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">{t('models.tags.3d', '3D')}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">{t('models.tags.llm', 'Ask LLM')}</span>
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20">{t('models.tags.lvm', 'LVM')}</span>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
                {producers.map((producer, index) => (
                    <ModelCard key={index} producer={producer} index={index} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <p className="text-lg text-text-muted max-w-3xl mx-auto">
                    {t('models.conclusion', 'And more 50+ the most popular models at one canvas includes: LLMs, VLMs, images, videos, sounds generation, etc.')}
                </p>
            </div>
        </section>
    );
};

export default AllModels;
