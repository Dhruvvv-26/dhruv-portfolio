import React from 'react';
import FadeInSection from './FadeInSection';
import Terminal from './Terminal';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t section-divider">
            <FadeInSection>
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold dark:text-gray-200 text-gray-800">
                        01. <span className="dark:text-primary text-primary-light">About_</span>
                    </h2>
                    <div className="ml-6 flex-grow h-[1px] dark:bg-primary/20 bg-primary-light/20"></div>
                </div>
            </FadeInSection>

            <div className="grid md:grid-cols-2 gap-12">
                <FadeInSection delay={100}>
                    <div className="space-y-6 dark:text-gray-400 text-gray-600 text-lg leading-relaxed font-sans">
                        <p>
                            Third-year CS student focused on applied ML at the intersection of cybersecurity and reliability engineering. Has shipped real systems with measurable outcomes (0.98 AUC fraud detection, 92% network intrusion detection rate, 35% MTTD reduction).
                        </p>
                        <p>
                            Interned at <span className="dark:text-primary text-primary-light font-semibold">infiniTraq (Griffin AI)</span> doing YOLO + TensorRT optimization. Passionate about building resilient, performant intelligent systems.
                        </p>

                        {/* Education */}
                        <div className="dark:bg-[#0f0f13] bg-gray-50 dark:border-gray-800 border-gray-200 border rounded-lg p-5 mt-4">
                            <div className="flex items-center gap-2 mb-3">
                                <i className="fas fa-graduation-cap dark:text-primary text-primary-light"></i>
                                <h4 className="font-semibold dark:text-gray-200 text-gray-800">Education</h4>
                            </div>
                            <p className="dark:text-gray-300 text-gray-700 font-medium">B.Tech Computer Science & Technology (Cybersecurity)</p>
                            <p className="dark:text-gray-400 text-gray-500 text-sm">SRM Institute of Science and Technology (SRMIST) · Aug 2022 – May 2026</p>
                            <p className="dark:text-gray-500 text-gray-500 text-sm mt-2">
                                <span className="dark:text-gray-400 text-gray-600 font-medium">Coursework:</span> Data Structures & Algorithms, Operating Systems, Database Systems, Cryptography, Computer Networks
                            </p>
                        </div>

                        {/* Certifications */}
                        <div className="flex flex-wrap gap-3 pt-2">
                            <span className="flex items-center px-4 py-2 dark:bg-primary/5 bg-primary-light/5 rounded-full dark:border-primary/30 border-primary-light/30 border text-sm font-mono dark:text-primary text-primary-light dark:hover:bg-primary/10 hover:bg-primary-light/10 transition-colors">
                                <i className="fas fa-certificate mr-2"></i> Oracle AI Vector Search
                            </span>
                            <span className="flex items-center px-4 py-2 dark:bg-red-500/5 bg-red-50 rounded-full dark:border-red-500/30 border-red-300 border text-sm font-mono dark:text-red-400 text-red-600 dark:hover:bg-red-500/10 hover:bg-red-100 transition-colors">
                                <i className="fab fa-redhat mr-2"></i> Red Hat RHCSA (RH134)
                            </span>
                        </div>
                    </div>
                </FadeInSection>

                <FadeInSection delay={300}>
                    <Terminal />
                </FadeInSection>
            </div>
        </section>
    );
};

export default About;
