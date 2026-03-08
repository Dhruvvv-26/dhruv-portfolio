import React from 'react';
import { Link } from 'react-router-dom';

export default function Stack() {
    const sections = [
        {
            title: 'Daily Driver',
            icon: 'fa-laptop-code',
            items: [
                { name: 'VSCode', desc: 'Primary editor with Vim keybindings' },
                { name: 'Extensions', desc: 'Pylance, Jupyter, GitLens, Tailwind CSS IntelliSense, Thunder Client' },
                { name: 'Terminal', desc: 'Zsh + Oh My Zsh with custom aliases' },
                { name: 'OS', desc: 'Ubuntu 22.04 LTS / macOS for dev, Oracle Linux for deployment' },
            ],
        },
        {
            title: 'ML Workflow',
            icon: 'fa-brain',
            items: [
                { name: 'Research', desc: 'Jupyter Lab → EDA, prototyping, visualization' },
                { name: 'Training', desc: 'Python scripts → PyTorch / XGBoost / scikit-learn' },
                { name: 'Serving', desc: 'FastAPI endpoints with Pydantic validation' },
                { name: 'Containerization', desc: 'Docker multi-stage builds → OCI registry' },
                { name: 'Deployment', desc: 'Oracle Cloud Infrastructure (OCI) → Kubernetes cluster' },
                { name: 'Monitoring', desc: 'Prometheus + Grafana for model drift, Concept Drift (ADWIN / Page-Hinkley)' },
            ],
        },
        {
            title: 'Languages',
            icon: 'fa-code',
            items: [
                { name: 'Python', desc: 'Primary — ML, APIs, scripting (90% of work)' },
                { name: 'C++', desc: 'Performance-critical paths, TensorRT optimization' },
                { name: 'JavaScript', desc: 'React frontends, Node tooling' },
                { name: 'C', desc: 'Systems programming, embedded utilities' },
                { name: 'SQL', desc: 'Data analysis, schema design' },
            ],
        },
        {
            title: 'Hardware',
            icon: 'fa-microchip',
            items: [
                { name: 'Dev Machine', desc: 'Intel i7 / 16GB RAM / SSD' },
                { name: 'Deployment', desc: '12-node OCI cluster (2x ARM Ampere A1, 10x VM.Standard)' },
                { name: 'Training', desc: 'Google Colab Pro (when GPUs needed)' },
            ],
        },
        {
            title: 'Learning Resources',
            icon: 'fa-book',
            items: [
                { name: 'Papers', desc: 'arXiv daily digest — focus on anomaly detection, network security, MLOps' },
                { name: 'Courses', desc: 'Stanford CS229, Fast.ai, Oracle AI certifications, Red Hat sysadmin' },
                { name: 'Books', desc: 'Designing Data-Intensive Applications, Hands-On ML (Géron)' },
                { name: 'Communities', desc: 'LeetCode, GitHub open source, ML Discord servers' },
            ],
        },
    ];

    return (
        <div className="min-h-screen dark:bg-[#0a0a0c] bg-[#F4F0E8]">
            <div className="max-w-4xl mx-auto px-6 py-20">
                {/* Header */}
                <div className="mb-16">
                    <Link to="/" className="font-mono text-sm dark:text-primary text-primary-light mb-4 inline-block hover:underline">
                        ← cd ~/home
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold dark:text-gray-100 text-gray-900 mb-4">
                        /stack
                    </h1>
                    <p className="dark:text-gray-400 text-gray-600 text-lg font-sans">
                        Tools, workflow, and setup I use daily for building ML systems and security infrastructure.
                    </p>
                </div>

                {/* Sections */}
                <div className="space-y-12">
                    {sections.map((section, sIdx) => (
                        <div key={sIdx}>
                            <h2 className="text-2xl font-bold dark:text-gray-200 text-gray-800 mb-6 flex items-center gap-3">
                                <i className={`fas ${section.icon} dark:text-primary text-primary-light`}></i>
                                {section.title}
                            </h2>
                            <div className="space-y-3">
                                {section.items.map((item, iIdx) => (
                                    <div
                                        key={iIdx}
                                        className="glass-card p-4 flex items-start gap-4"
                                    >
                                        <span className="font-mono text-sm dark:text-primary text-primary-light min-w-[140px] flex-shrink-0 font-semibold">
                                            {item.name}
                                        </span>
                                        <span className="dark:text-gray-400 text-gray-600 font-sans text-sm">
                                            {item.desc}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 pt-8 dark:border-t dark:border-gray-800 border-t border-gray-200 text-center">
                    <p className="font-mono text-sm dark:text-gray-600 text-gray-400">
                        Last updated: March 2026 · Built with React + Tailwind CSS
                    </p>
                    <Link to="/" className="font-mono text-sm dark:text-primary text-primary-light mt-2 inline-block hover:underline">
                        ← Back to portfolio
                    </Link>
                </div>
            </div>
        </div>
    );
}
