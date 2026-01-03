import React from 'react';
import { useTranslation } from 'react-i18next';
import openai from '../assets/models/openai.webp';
import luma from '../assets/models/luma-ai.mp4';
import wan from '../assets/models/wan.webm';
import flux from '../assets/models/flux.webp';
import stability from '../assets/models/stability.webp';
import recraft from '../assets/models/recraft.webp';
import runway from '../assets/models/runway.webm';
import veo3 from '../assets/models/veo3.mp4';
import claude from '../assets/models/claude.jpg';
import suno from '../assets/models/suno.webp';

const AllModels = () => {
    const { t } = useTranslation();

    const producers = [
        {
            name: "Alibaba",
            desc: "Global scale AI",
            models: ["Wan 2.5/2.6", "Qwen2"],
            video: wan
        },
        {
            name: "Black Forest Labs",
            desc: "SOTA Open weights",
            models: ["FLUX Pro", "FLUX Context"],
            image: flux
        },
        {
            name: "Stability AI",
            desc: "Open source visual media",
            models: ["Stable Diffusion 3.5", "Stable Audio 2"],
            image: stability
        },
        {
            name: "Recraft",
            desc: "Vector design",
            models: ["Recraft V3", "Recraft 20B"],
            image: recraft
        },
        {
            name: "Runway",
            desc: "Generative video",
            models: ["Gen-3 Alpha", "Gen-2", "Act-One"],
            video: runway
        },
        {
            name: "Luma AI",
            desc: "Next-gen interactive media",
            models: ["Dream Machine", "Ray 2", "Photon"],
            video: luma
        },
        {
            name: "OpenAI",
            desc: "Pioneering generative AI",
            models: ["GPT-5", "Sora", "DALL-E 3"],
            image: openai
        },
        {
            name: "Google DeepMind",
            desc: "Multimodal intelligence",
            models: ["Veo 3", "Nano Banana", "Gemini 2.5"],
            video: veo3
        },
        {
            name: "Anthropic",
            desc: "Constitutional AI",
            models: ["Claude 3.5 Sonnet", "Claude 3.5 Haiku", "Claude 3 Opus"],
            image: claude
        },
        {
            name: "Suno",
            desc: "Audio intelligence",
            models: ["Suno v4", "Suno v3.5"],
            image: suno
        },
        {
            name: "Midjourney",
            desc: "Artistic generation",
            models: ["Midjourney v6.1", "Niji 6"]
        },
        {
            name: "Kuaishou",
            desc: "Cinematic realism",
            models: ["Kling 2.1 Master", "Kling 1.6"]
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {producers.map((producer, index) => (
                    <div key={index} className="glass-card group overflow-hidden p-5 h-[200px] flex flex-col justify-between relative hover:scale-[1.02] hover:border-white/20">
                        {producer.video && (
                            <>
                                <video
                                    src={producer.video}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 z-0"
                                />
                                <div className="absolute inset-0 bg-black/70 z-0" />
                            </>
                        )}
                        {producer.image && (
                            <>
                                <img
                                    src={producer.image}
                                    alt={producer.name}
                                    className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 z-0"
                                />
                                <div className="absolute inset-0 bg-black/70 z-0" />
                            </>
                        )}

                        <div className="relative z-10">
                            <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-200 transition-colors">{producer.name}</h3>
                            <p className="text-xs text-text-muted mb-4">{producer.desc}</p>
                        </div>

                        <div className="relative z-10 flex flex-wrap gap-2 content-end">
                            {producer.models.map((model, idx) => (
                                <span key={idx} className="text-[10px] sm:text-[11px] font-medium text-white/80 bg-white/10 px-2 py-1 rounded-md border border-white/5 backdrop-blur-sm whitespace-nowrap">
                                    {model}
                                </span>
                            ))}
                        </div>
                    </div>
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
