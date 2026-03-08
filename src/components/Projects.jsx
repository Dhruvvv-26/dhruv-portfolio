import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';

const Counter = ({ target, decimals = 0, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) setIsVisible(true);
        });
        if (domRef.current) observer.observe(domRef.current);
        return () => { if (domRef.current) observer.unobserve(domRef.current); };
    }, []);

    useEffect(() => {
        if (!isVisible) return;
        let start = 0;
        const end = parseFloat(target);
        const duration = 2000;
        const incrementTime = 30;
        const steps = duration / incrementTime;
        const increment = end / steps;
        const timer = setInterval(() => {
            start += increment;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
        }, incrementTime);
        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span ref={domRef}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

const STATUS_COLORS = {
    ACTIVE: 'dark:bg-cyan-500/20 bg-cyan-100 dark:text-cyan-400 text-cyan-700 dark:border-cyan-500/30 border-cyan-300',
    DEPLOYED: 'dark:bg-green-500/20 bg-green-100 dark:text-green-400 text-green-700 dark:border-green-500/30 border-green-300',
    ARCHIVED: 'dark:bg-gray-500/20 bg-gray-100 dark:text-gray-400 text-gray-600 dark:border-gray-500/30 border-gray-300',
};

const Projects = () => {
    const projects = [
        {
            title: "AI THREAT INTELLIGENCE SYSTEM",
            status: "ACTIVE",
            severity: "CRITICAL",
            timestamp: "Aug 2025 – Mar 2026",
            desc: "Enterprise-grade ML pipeline for financial security, processing 284k transactions with sub-second REST API scoring.",
            stack: ["XGBoost", "IsolationForest", "FastAPI", "ADWIN"],
            outcomes: [
                "F1 Score: 0.87",
                "FPR Reduction: 18%",
                "Transactions processed: 284k",
                "Sub-second REST API scoring with drift monitoring in prod"
            ],
            keyMetric: { value: 0.98, decimals: 2, label: "AUC" },
            link: "https://github.com/Dhruvvv-26/AI-Threat-Intelligence-Banking.git"
        },
        {
            title: "CYBERSENTINEL: AUTONOMOUS AI CYBER DEFENSE",
            status: "ACTIVE",
            severity: "HIGH",
            timestamp: "Jun 2025 – Present",
            desc: "Comprehensive network intrusion detection system with a complete SOC-style monitoring dashboard.",
            stack: ["Machine Learning", "Python", "SOC Dashboard", "Cybersecurity"],
            outcomes: [
                "Detection Rate: 92%",
                "False Positive Rate: 1.8%",
                "MTTR improved by 25%",
                "Covers 40+ attack categories across UNSW-NB15 & NSL-KDD"
            ],
            keyMetric: { value: 92, decimals: 0, suffix: "%", label: "DETECTION" },
            link: "https://github.com/Dhruvvv-26/CyberSentinel-AI-CyberDefense.git"
        },
        {
            title: "K9: KUBERNETES FAILURE PREDICTION",
            status: "DEPLOYED",
            severity: "MEDIUM",
            timestamp: "Mar 2025 – Jul 2025",
            desc: "Predictive infrastructure monitoring deployed on Oracle Cloud, forecasting pod failures from cluster telemetry.",
            stack: ["Kubernetes", "Oracle Cloud", "XGBoost", "Random Forest"],
            outcomes: [
                "MTTD Reduction: 35%",
                "Precision: 85%",
                "Recall: 90%",
                "Deployed on 12-node OCI cluster with real-time dashboards"
            ],
            keyMetric: { value: 35, decimals: 0, suffix: "%", prefix: "-", label: "MTTD↓" },
            link: "https://github.com/Dhruvvv-26/Kubernetes-Failure-Predictor.git"
        },
        {
            title: "SMART ATTENDANCE SYSTEM",
            status: "DEPLOYED",
            severity: "LOW",
            timestamp: "Jan 2025 – Mar 2025",
            desc: "High-concurrency facial recognition pipeline with sub-second latency for enterprise attendance monitoring.",
            stack: ["YOLO", "ArcFace", "FAISS", "FastAPI", "React"],
            outcomes: [
                "Accuracy: 99%",
                "Latency: <150ms",
                "Handles 100+ concurrent users",
                "10K+ embeddings indexed in FAISS"
            ],
            keyMetric: { value: 99, decimals: 0, suffix: "%", label: "ACCURACY" },
            link: "https://github.com/Dhruvvv-26/Dhruvvv-26-Attendance-System-face-detection.git"
        },
        {
            title: "DECENTRALIZED STOCK TRADING PLATFORM",
            status: "ARCHIVED",
            severity: "LOW",
            timestamp: "Nov 2024 – Dec 2024",
            desc: "High-performance blockchain trading simulator utilizing the Move smart contract language on Aptos.",
            stack: ["Aptos", "Move", "Blockchain", "React.js", "FastAPI"],
            outcomes: [
                "Finality: 0.4s",
                "Fee Reduction: 62%",
                "10,000+ simulated trades executed",
                "Top 30 / 500 teams at inter-college hackathon"
            ],
            keyMetric: { value: 62, decimals: 0, suffix: "%", label: "FEE↓" },
            link: "https://github.com/Dhruvvv-26/De-Trade.git"
        }
    ];

    return (
        <section id="projects" className="py-24 px-6 max-w-6xl mx-auto border-t section-divider">
            <FadeInSection>
                <div className="flex items-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-sans font-bold dark:text-gray-200 text-gray-800">
                        03. <span className="dark:text-primary text-primary-light">Projects_</span>
                    </h2>
                    <div className="ml-6 flex-grow h-[1px] dark:bg-primary/20 bg-primary-light/20"></div>
                </div>
            </FadeInSection>

            <div className="space-y-10">
                {projects.map((project, idx) => (
                    <FadeInSection key={idx} delay={50}>
                        <div className="dark:bg-[#0a0a0e] bg-white dark:border-gray-800 border-gray-200 border rounded-lg overflow-hidden group dark:hover:border-primary/30 hover:border-primary-light/30 transition-all relative">
                            {/* Header bar — INCIDENT REPORT label */}
                            <div className="dark:bg-[#0f0f15] bg-gray-50 dark:border-b dark:border-gray-800 border-b border-gray-200 px-6 py-2 flex items-center justify-between">
                                <span className="font-mono text-xs dark:text-gray-600 text-gray-400 tracking-widest uppercase">
                                    ─ Incident Report ──
                                </span>
                                <span className="font-mono text-xs dark:text-gray-600 text-gray-400">
                                    ID: IR-{String(2025000 + idx).padStart(7, '0')}
                                </span>
                            </div>

                            {/* Main card content */}
                            <div className="p-6">
                                {/* Top row: status + title + key metric */}
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className={`px-2 py-0.5 text-xs font-mono font-bold rounded border ${STATUS_COLORS[project.status]}`}>
                                                {project.status}
                                            </span>
                                            <span className={`px-2 py-0.5 text-xs font-mono rounded ${project.severity === 'CRITICAL' ? 'dark:text-red-400 text-red-600 dark:bg-red-500/10 bg-red-50' :
                                                    project.severity === 'HIGH' ? 'dark:text-orange-400 text-orange-600 dark:bg-orange-500/10 bg-orange-50' :
                                                        project.severity === 'MEDIUM' ? 'dark:text-yellow-400 text-yellow-600 dark:bg-yellow-500/10 bg-yellow-50' :
                                                            'dark:text-gray-400 text-gray-500 dark:bg-gray-500/10 bg-gray-100'
                                                }`}>
                                                SEV: {project.severity}
                                            </span>
                                        </div>
                                        <h3 className="text-xl md:text-2xl font-mono font-bold dark:text-gray-100 text-gray-900 tracking-tight">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <div className="flex flex-col items-end text-right flex-shrink-0">
                                        <span className="font-mono text-3xl md:text-4xl font-bold dark:text-primary text-primary-light text-glow leading-none">
                                            <Counter
                                                target={project.keyMetric.value}
                                                decimals={project.keyMetric.decimals}
                                                suffix={project.keyMetric.suffix}
                                                prefix={project.keyMetric.prefix}
                                            />
                                        </span>
                                        <span className="font-mono text-xs dark:text-gray-500 text-gray-400 uppercase tracking-wider mt-1">
                                            {project.keyMetric.label}
                                        </span>
                                    </div>
                                </div>

                                {/* Timestamp */}
                                <p className="font-mono text-xs dark:text-gray-500 text-gray-400 mb-3">
                                    <span className="dark:text-gray-600 text-gray-400">Timestamp:</span> {project.timestamp}
                                </p>

                                {/* Description */}
                                <p className="dark:text-gray-400 text-gray-600 mb-4 font-sans">{project.desc}</p>

                                {/* Tech stack */}
                                <div className="mb-4">
                                    <span className="font-mono text-xs dark:text-gray-600 text-gray-400 uppercase tracking-wider">Stack: </span>
                                    <span className="font-mono text-sm dark:text-amber-400 text-amber-600">
                                        {project.stack.join(' · ')}
                                    </span>
                                </div>

                                {/* Outcomes */}
                                <div className="space-y-1 mb-4">
                                    {project.outcomes.map((outcome, oIdx) => (
                                        <div key={oIdx} className="flex items-start font-mono text-sm">
                                            <span className="dark:text-green-400 text-green-600 mr-2">►</span>
                                            <span className="dark:text-green-300/80 text-green-700">{outcome}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer: GitHub link */}
                                <div className="flex justify-end pt-3 dark:border-t dark:border-gray-800 border-t border-gray-200">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-mono text-xs dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors flex items-center gap-2"
                                    >
                                        [ VIEW ON GITHUB <i className="fab fa-github"></i> → ]
                                    </a>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </section>
    );
};

export default Projects;
