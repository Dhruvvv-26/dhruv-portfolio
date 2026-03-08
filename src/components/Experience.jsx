import React from 'react';
import FadeInSection from './FadeInSection';

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t section-divider">
            <div className="grid md:grid-cols-2 gap-16">

                {/* Experience Timeline */}
                <div>
                    <FadeInSection>
                        <div className="flex items-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-sans font-bold dark:text-gray-200 text-gray-800">
                                04. <span className="dark:text-primary text-primary-light">Experience_</span>
                            </h2>
                        </div>
                    </FadeInSection>

                    <div className="relative dark:border-l dark:border-gray-700 border-l border-gray-300 ml-4 py-4 space-y-12">
                        <FadeInSection delay={100}>
                            <div className="relative pl-8">
                                {/* Timeline dot */}
                                <div className="absolute top-1 -left-[5px] w-[9px] h-[9px] dark:bg-primary bg-primary-light rounded-full dark:shadow-[0_0_10px_rgba(0,240,255,0.8)] shadow-[0_0_10px_rgba(8,145,178,0.8)]"></div>

                                <div className="mb-1 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                    <h3 className="text-xl font-bold font-sans dark:text-gray-200 text-gray-800">Computer Vision (AI) Intern</h3>
                                    <span className="font-mono dark:text-primary text-primary-light text-sm mt-1 sm:mt-0">Dec 2025 – Jan 2026</span>
                                </div>

                                <h4 className="text-lg font-sans dark:text-gray-400 text-gray-500 mb-4">
                                    infiniTraq (Griffin AI) <span className="dark:text-gray-600 text-gray-400 text-sm italic ml-2">Remote</span>
                                </h4>

                                <ul className="space-y-3 font-sans dark:text-gray-300 text-gray-700">
                                    <li className="flex items-start">
                                        <i className="fas fa-caret-right dark:text-primary text-primary-light mt-1 mr-3"></i>
                                        <span>Trained and optimized YOLO-based object detection models using NVIDIA TensorRT, improving mAP by 5% through data augmentation and hyperparameter tuning</span>
                                    </li>
                                    <li className="flex items-start">
                                        <i className="fas fa-caret-right dark:text-primary text-primary-light mt-1 mr-3"></i>
                                        <span>Designed and deployed action-recognition pipeline for real-world video analytics, delivering measurable throughput improvements</span>
                                    </li>
                                </ul>
                            </div>
                        </FadeInSection>
                    </div>
                </div>

                {/* Achievements + Certifications */}
                <div>
                    <FadeInSection delay={200}>
                        <div className="flex items-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-sans font-bold dark:text-gray-200 text-gray-800">
                                05. <span className="dark:text-primary text-primary-light">Achievements_</span>
                            </h2>
                        </div>
                    </FadeInSection>

                    <div className="space-y-6">
                        {/* Achievement 1 */}
                        <FadeInSection delay={300}>
                            <div className="flex items-center p-5 glass-card group">
                                <div className="flex-shrink-0 w-14 h-14 dark:bg-gray-900 bg-gray-100 rounded-full flex items-center justify-center dark:border-gray-600 border-gray-300 border dark:group-hover:border-gray-400 group-hover:border-gray-500 transition-all">
                                    <i className="fas fa-medal text-2xl dark:text-gray-400 text-gray-500"></i>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold font-sans dark:text-gray-200 text-gray-800">2nd Runner-Up</h3>
                                    <p className="dark:text-gray-400 text-gray-500 font-sans text-sm mt-1">Guidewire DevTrails 2025 Hackathon</p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Achievement 2 */}
                        <FadeInSection delay={400}>
                            <div className="flex items-center p-5 glass-card dark:border-secondary/20 border-amber-200 group">
                                <div className="flex-shrink-0 w-14 h-14 dark:bg-secondary/10 bg-amber-50 rounded-full flex items-center justify-center dark:border-secondary/50 border-amber-300 border dark:group-hover:border-secondary group-hover:border-amber-400 dark:group-hover:shadow-[0_0_15px_rgba(255,176,0,0.4)] transition-all">
                                    <i className="fas fa-trophy text-2xl dark:text-secondary text-amber-500"></i>
                                </div>
                                <div className="ml-5">
                                    <h3 className="text-lg font-bold font-sans dark:text-secondary text-amber-600">Top 30 / 500 Teams</h3>
                                    <p className="dark:text-gray-400 text-gray-500 font-sans text-sm mt-1">Inter-College Hackathon (Aptos blockchain platform)</p>
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Certifications */}
                        <FadeInSection delay={500}>
                            <h3 className="text-xl font-sans font-bold dark:text-gray-300 text-gray-700 mt-8 mb-4 flex items-center gap-2">
                                <i className="fas fa-certificate dark:text-primary text-primary-light"></i> Certifications
                            </h3>
                            <div className="space-y-3">
                                <div className="flex items-center p-4 glass-card">
                                    <i className="fas fa-check-circle dark:text-primary text-primary-light mr-3"></i>
                                    <div>
                                        <p className="font-sans dark:text-gray-200 text-gray-800 font-medium">Oracle AI Vector Search Certified Professional</p>
                                        <p className="font-sans dark:text-gray-500 text-gray-400 text-sm">Oracle</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-4 glass-card">
                                    <i className="fab fa-redhat dark:text-red-400 text-red-500 mr-3"></i>
                                    <div>
                                        <p className="font-sans dark:text-gray-200 text-gray-800 font-medium">Red Hat System Administration II (RH134 / RHCSA)</p>
                                        <p className="font-sans dark:text-gray-500 text-gray-400 text-sm">Red Hat</p>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
