import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Sparkles, Image as ImageIcon, Video, Film, Type } from 'lucide-react';
import sd35Image from '../assets/workflow/sd_3_5.webp';
import lastFrame from '../assets/workflow/last_frame.webp';
import episode1 from '../assets/workflow/episode1.mp4';
import episode2 from '../assets/workflow/episode2.mp4';

const NodeContainer = ({ children, x, y, w, h, delay, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.5, marginTop: 20 }}
        animate={{ opacity: 1, scale: 1, marginTop: 0 }}
        transition={{ duration: 0.5, delay, type: "spring" }}
        className={`absolute z-10 bg-bg-card border border-white/10 rounded-xl shadow-2xl backdrop-blur-md ${className}`}
        style={{ left: x, top: y, width: w, height: h }}
    >
        {children}
    </motion.div>
);

const TextNode = ({ icon: Icon, title, content, x, y, w, h, delay, color = "text-primary" }) => (
    <NodeContainer x={x} y={y} w={w} h={h} delay={delay} className="p-2 flex flex-col gap-2">
        <div className="flex items-center gap-2 mb-1">
            <div className={`p-1.5 rounded-md bg-white/5 ${color}`}>
                <Icon className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white uppercase tracking-wider">{title}</span>
        </div>
        <div className="text-[10px] text-text-muted leading-relaxed line-clamp-4 bg-black/20 p-2 rounded border border-white/5 font-mono flex-1">
            {content}
        </div>
    </NodeContainer>
);

const ImageNode = ({ icon: Icon, title, url, x, y, w, h, delay, color = "text-purple-400" }) => {
    const { t } = useTranslation();
    return (
        <NodeContainer x={x} y={y} w={w} h={h} delay={delay} className="p-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-xs font-bold text-white">{title}</span>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded border border-white/5 flex items-center justify-center overflow-hidden relative group flex-1">
                {url ? (
                    <img src={url} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <>
                        {/* Mock Content */}
                        <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                        <div className="z-10 text-[10px] text-white/40 font-mono flex items-center gap-1">
                            <ImageIcon className="w-4 h-4" />
                            {t('workflow.nodes.mock.generated', 'Generated')}
                        </div>
                    </>
                )}
            </div>
        </NodeContainer>
    );
};

const VideoNode = ({ icon: Icon, title, url, x, y, w, h, delay, color = "text-orange-400" }) => {
    const { t } = useTranslation();
    return (
        <NodeContainer x={x} y={y} w={w} h={h} delay={delay} className="p-2 flex flex-col gap-2">
            <div className="flex items-center gap-2">
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-xs font-bold text-white">{title}</span>
            </div>
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded border border-white/5 flex items-center justify-center overflow-hidden relative group flex-1">
                {url ? (
                    <video src={url} autoPlay loop muted playsInline className="w-full h-full object-cover" />
                ) : (
                    <>
                        {/* Mock Content */}
                        <div className="absolute inset-0 opacity-50 bg-gradient-to-tr from-orange-500/20 to-red-500/20" />
                        <div className="z-10 text-[10px] text-white/40 font-mono flex items-center gap-1">
                            <Video className="w-4 h-4" />
                            {t('workflow.nodes.mock.generated', 'Generated')}
                        </div>
                    </>
                )}
            </div>
        </NodeContainer>
    );
};

const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return isMobile;
};

const Connection = ({ start, end, delay, dashed = false, isMobile = false }) => {
    let sx, sy, ex, ey, pathD;

    if (isMobile) {
        // Top to Bottom flow
        sx = start.x + start.w / 2;
        sy = start.y + start.h;
        ex = end.x + end.w / 2;
        ey = end.y;

        const midY = (sy + ey) / 2;
        pathD = `M ${sx} ${sy} C ${sx} ${midY}, ${ex} ${midY}, ${ex} ${ey}`;
    } else {
        // Left to Right flow
        sx = start.x + start.w;
        sy = start.y + start.h / 2;
        ex = end.x;
        ey = end.y + end.h / 2;

        const midX = (sx + ex) / 2;
        pathD = `M ${sx} ${sy} C ${midX} ${sy}, ${midX} ${ey}, ${ex} ${ey}`;
    }

    return (
        <>
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
                <motion.path
                    d={pathD}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeWidth="3"
                    strokeDasharray={dashed ? "5,5" : "none"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1.5, delay, ease: "easeInOut" }}
                />


                <defs>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8439FF" stopOpacity="0" />
                        <stop offset="50%" stopColor="#8439FF" stopOpacity="0.5" />
                        <stop offset="100%" stopColor="#8439FF" stopOpacity="0" />
                    </linearGradient>
                </defs>
            </svg>

        </>
    );
};

const WorkflowAnimation = () => {
    const isMobile = useIsMobile();
    const { t } = useTranslation();

    const pos = isMobile ? {
        prompt: { x: 0, y: 0, w: 200, h: 150 },
        sd_3_5: { x: 0, y: 170, w: 200, h: 200 },
        episode1: { x: 0, y: 390, w: 200, h: 200 },
        extract: { x: 0, y: 610, w: 200, h: 200 },
        episode2: { x: 0, y: 830, w: 200, h: 200 },
    } : {
        prompt: { x: 10, y: 50, w: 200, h: 120 },
        sd_3_5: { x: 260, y: 10, w: 200, h: 200 },
        episode1: { x: 510, y: 10, w: 200, h: 200 },
        extract: { x: 760, y: 10, w: 200, h: 200 },
        episode2: { x: 1010, y: 10, w: 200, h: 200 },
    };

    return (
        <div className="w-full flex items-start md:items-center justify-center">
            <div className={`relative shrink-0 transition-all duration-500
                ${isMobile
                    ? 'w-[200px] h-[1030px]'
                    : 'w-[1220px] h-[220px] scale-[0.4] sm:scale-[0.45] md:scale-[0.7] lg:scale-[0.85]'
                }`}
            >
                <div className="absolute inset-0">
                    <Connection start={pos.prompt} end={pos.sd_3_5} delay={0} isMobile={isMobile} />
                    <Connection start={pos.sd_3_5} end={pos.episode1} delay={1} isMobile={isMobile} />
                    <Connection start={pos.episode1} end={pos.extract} delay={2} isMobile={isMobile} />
                    <Connection start={pos.extract} end={pos.episode2} delay={3} isMobile={isMobile} />
                </div>

                <TextNode
                    icon={Type}
                    title={t('workflow.nodes.prompt.title', 'Prompt')}
                    content={t('workflow.nodes.prompt.content', 'Highly detailed cinematic scene of a cat astronaut walking on the Moon...')}
                    x={pos.prompt.x}
                    y={pos.prompt.y}
                    w={pos.prompt.w}
                    h={pos.prompt.h}
                    delay={0}
                    color="text-blue-400"
                />

                <ImageNode
                    icon={ImageIcon}
                    title={t('workflow.nodes.sd_3_5.title', 'Stable Diffusion 3.5')}
                    url={sd35Image}
                    x={pos.sd_3_5.x}
                    y={pos.sd_3_5.y}
                    w={pos.sd_3_5.w}
                    h={pos.sd_3_5.h}
                    delay={.5}
                />

                <VideoNode
                    icon={Film}
                    title={t('workflow.nodes.episode1.title', 'WAN 2.5: episode 1')}
                    url={episode1}
                    x={pos.episode1.x}
                    y={pos.episode1.y}
                    w={pos.episode1.w}
                    h={pos.episode1.h}
                    delay={1}
                />

                <ImageNode
                    icon={ImageIcon}
                    title={t('workflow.nodes.extract.title', 'Extract last frame')}
                    url={lastFrame}
                    x={pos.extract.x}
                    y={pos.extract.y}
                    w={pos.extract.w}
                    h={pos.extract.h}
                    delay={1.5}
                    color="text-green-400"
                />

                <VideoNode
                    icon={Film}
                    title={t('workflow.nodes.episode2.title', 'WAN 2.5: episode 2')}
                    url={episode2}
                    x={pos.episode2.x}
                    y={pos.episode2.y}
                    w={pos.episode2.w}
                    h={pos.episode2.h}
                    delay={2}
                />

            </div>
        </div>
    );
};

export default WorkflowAnimation;
