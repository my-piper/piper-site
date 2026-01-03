import React from 'react';
import { useTranslation } from 'react-i18next';

const Showcase = () => {
    const { t } = useTranslation();

    return (
        <section id="showcase" className="section-container bg-bg-card border-y border-white/10">
            <div className="w-full max-w-[1200px] mx-auto px-4">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold mb-4">{t('showcase.title_part1', 'Works with your')} <span className="text-gradient">{t('showcase.title_part2', 'stack')}</span></h2>
                    <p className="text-lg text-text-muted">{t('showcase.subtitle', 'Integrate easily with Python, JavaScript, and your favorite cloud providers.')}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-12 opacity-70 mb-16">
                    {['Python', 'TensorFlow', 'PyTorch', 'HuggingFace', 'AWS', 'Docker'].map((item) => (
                        <span key={item} className="text-2xl font-semibold text-text-muted hover:text-text-main transition-colors cursor-default">
                            {item}
                        </span>
                    ))}
                </div>

                <div className="bg-black p-8 rounded-xl border border-white/10 font-mono text-sm md:text-base overflow-x-auto relative mt-8">
                    <div className="absolute top-0 left-0 bg-white/10 px-4 py-1 text-xs text-text-muted rounded-br-lg">pipeline.py</div>
                    <pre className="text-gray-300 pt-4">
                        <code>
                            {`<span class="text-purple-400">from</span> piper <span class="text-purple-400">import</span> Pipeline, Model

<span class="text-green-400"># Define your workflow visually or in code</span>
<span class="text-purple-400">def</span> <span class="text-yellow-200">analyze_sentiment</span>(text):
    model = Model(<span class="text-orange-300">"gpt-4-turbo"</span>)
    <span class="text-purple-400">return</span> model.generate(<span class="text-orange-300">f"Analyze: {text}"</span>)

pipeline = Pipeline()
pipeline.add_step(analyze_sentiment)
pipeline.deploy(<span class="text-orange-300">"production"</span>)`}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Showcase;
