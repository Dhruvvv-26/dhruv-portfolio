import React, { useState, useEffect, useRef } from 'react';
import FadeInSection from './FadeInSection';
import MetricSparkline from './MetricSparkline';
import { useInView } from '../hooks/useInView';

const Counter = ({ target, decimals = 0, suffix = '', prefix = '' }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                setIsVisible(true);
            }
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
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isVisible, target]);

    return <span ref={domRef}>{prefix}{count.toFixed(decimals)}{suffix}</span>;
};

const Hero = () => {
    const [metricsRef, metricsInView] = useInView();
    const words = ["ML Engineer", "Cybersecurity Builder", "Systems Thinker", "CS @ SRMIST · CGPA 9.55"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let timer;
        const fullWord = words[currentWordIndex];
        if (!isDeleting && currentText === fullWord) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && currentText === '') {
            setIsDeleting(false);
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
            setTypingSpeed(100);
        } else {
            timer = setTimeout(() => {
                setCurrentText(
                    isDeleting
                        ? fullWord.substring(0, currentText.length - 1)
                        : fullWord.substring(0, currentText.length + 1)
                );
                setTypingSpeed(isDeleting ? 50 : 100);
            }, typingSpeed);
        }
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, typingSpeed, words]);

    const metrics = [
        { label: "Fraud Detection ROC-AUC", value: 0.98, decimals: 2 },
        { label: "Intrusion Detection Rate", value: 92, decimals: 0, suffix: "%" },
        { label: "Infrastructure MTTD Reduction", value: 35, decimals: 0, suffix: "%", prefix: "-" },
        { label: "Transactions Analyzed", textValue: "284K+" },
    ];

    return (
        <section id="hero" className="min-h-screen flex items-center pt-20 px-6 max-w-6xl mx-auto">
            <div className="w-full">
                <p className="font-mono dark:text-primary text-primary-light mb-4 tracking-wider animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
                    SYS.INIT // USER DETECTED
                </p>
                <h1 className="text-5xl md:text-7xl font-bold font-sans dark:text-gray-100 text-gray-900 mb-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                    Dhruv Gupta.
                </h1>

                <h2 className="text-3xl md:text-5xl font-bold font-sans dark:text-gray-400 text-gray-500 mb-6 flex items-center animate-fadeInUp h-12 md:h-14" style={{ animationDelay: '0.3s' }}>
                    <span className="dark:text-primary text-primary-light mr-3">&gt;</span>
                    <span>{currentText}</span>
                    <span className="w-4 h-8 md:h-10 dark:bg-primary bg-primary-light ml-1 animate-pulse"></span>
                </h2>

                <p className="max-w-xl text-lg dark:text-gray-400 text-gray-600 mb-10 leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                    Building production-grade ML systems for fraud detection, network intrusion, and infrastructure reliability.
                </p>

                {/* Sparkline Metrics */}
                <FadeInSection delay={200}>
                    <div ref={metricsRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                        <div className="glass-card p-5 flex flex-col items-center justify-center">
                            <MetricSparkline value="0.98" label="ROC-AUC" animate={metricsInView} />
                        </div>
                        <div className="glass-card p-5 flex flex-col items-center justify-center">
                            <MetricSparkline value="92" label="Detection Rate" color="#FFB300" animate={metricsInView} />
                        </div>
                        <div className="glass-card p-5 flex flex-col items-center justify-center">
                            <MetricSparkline value="35" label="MTTD Reduction %" color="#00C853" animate={metricsInView} />
                        </div>
                        <div className="glass-card p-5 flex flex-col items-center justify-center">
                            <span className="font-mono font-bold text-xl sm:text-2xl md:text-3xl dark:text-primary text-primary-light text-glow leading-none">284K+</span>
                            <span className="text-[10px] sm:text-xs dark:text-gray-500 text-gray-500 uppercase tracking-wider mt-2 font-sans">Transactions Analyzed</span>
                        </div>
                    </div>
                </FadeInSection>

                {/* CTA + Social Row */}
                <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
                    <a href="#projects" className="dark:bg-primary/10 bg-primary-light/10 dark:border-primary border-primary-light dark:text-primary text-primary-light border px-8 py-3 rounded-[4px] font-mono dark:hover:bg-primary/20 hover:bg-primary-light/20 hover:shadow-lg transition-all flex items-center justify-center">
                        <i className="fas fa-terminal mr-2"></i> View Projects
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="dark:border-gray-600 border-gray-300 dark:text-gray-300 text-gray-600 border px-8 py-3 rounded-[4px] font-mono dark:hover:border-gray-400 hover:border-gray-500 dark:hover:text-white hover:text-gray-900 transition-all flex items-center justify-center">
                        <i className="fas fa-download mr-2"></i> Download Resume
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4 sm:ml-auto">
                        <a href="https://github.com/Dhruvvv-26" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-xl" aria-label="GitHub">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/dhruv-gupta-dg2608" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-xl" aria-label="LinkedIn">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://leetcode.com/u/Dhruvvv_26/" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-xl" aria-label="LeetCode">
                            <i className="fas fa-code"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
