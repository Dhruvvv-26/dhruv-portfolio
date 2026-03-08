import React from 'react';
import FadeInSection from './FadeInSection';
import { useInView } from '../hooks/useInView';

const CLUSTERS = {
    'ML / AI': {
        color: '#00E5FF',
        icon: 'fas fa-brain',
        skills: ['PyTorch', 'XGBoost', 'Isolation Forest', 'YOLO', 'ArcFace', 'Random Forest'],
        delay: 100
    },
    'Systems & Cloud': {
        color: '#FFB300',
        icon: 'fas fa-server',
        skills: ['Kubernetes', 'Docker', 'Oracle Cloud', 'Linux', 'FAISS', 'Git'],
        delay: 200
    },
    'Web / APIs': {
        color: '#00C853',
        icon: 'fas fa-network-wired',
        skills: ['FastAPI', 'React.js', 'WebSockets', 'REST APIs', 'DynamoDB'],
        delay: 300
    },
    'Languages': {
        color: '#FF5252',
        icon: 'fas fa-code',
        skills: ['Python', 'C++', 'C', 'JavaScript'],
        delay: 400
    },
    'Concepts': {
        color: '#AA00FF',
        icon: 'fas fa-lightbulb',
        skills: ['Anomaly Detection', 'MLOps', 'NIDS', 'Distributed Systems', 'Concept Drift'],
        delay: 500
    },
};

const SkillCategory = ({ title, color, icon, skills, index, delay }) => {
    const [ref, inView] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className="glass-card p-6 flex flex-col h-full group dark:hover:border-primary/40 hover:border-primary-light/40 transition-all duration-300 relative overflow-hidden"
            style={{
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`
            }}
        >
            {/* Subtle background glow on hover */}
            <div
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(circle at top right, ${color}, transparent 70%)` }}
            />

            <div className="flex items-center gap-3 mb-6 relative z-10">
                <div
                    className="w-10 h-10 rounded  flex items-center justify-center bg-black/20 dark:bg-white/5 border dark:border-white/10 border-black/5"
                    style={{ color: color }}
                >
                    <i className={`${icon} text-lg`}></i>
                </div>
                <h3 className="text-xl font-sans font-bold dark:text-gray-100 text-gray-800 tracking-wide">
                    {title}
                </h3>
            </div>

            <div className="flex flex-wrap gap-2 relative z-10">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="px-3 py-1.5 text-sm font-mono rounded dark:bg-[#0f0f15] bg-gray-100 dark:border-gray-800 border-gray-200 border dark:text-gray-300 text-gray-700 hover:-translate-y-0.5 transition-transform cursor-default shadow-sm"
                        style={{ borderLeftColor: color, borderLeftWidth: '2px' }}
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 max-w-6xl mx-auto border-t section-divider">
            <FadeInSection>
                <div className="flex items-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold dark:text-gray-200 text-gray-800">
                        02. <span className="dark:text-primary text-primary-light">Skills_</span>
                    </h2>
                    <div className="ml-6 flex-grow h-[1px] dark:bg-primary/20 bg-primary-light/20"></div>
                </div>
                <p className="font-sans text-lg dark:text-gray-400 text-gray-600 mb-12 max-w-2xl">
                    Core technical stack spanning machine learning, distributed systems, and modern web infrastructure.
                </p>
            </FadeInSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(CLUSTERS).map(([title, data], index) => (
                    <SkillCategory
                        key={title}
                        title={title}
                        {...data}
                        index={index}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
