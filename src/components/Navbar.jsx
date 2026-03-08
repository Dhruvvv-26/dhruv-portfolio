import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: '~/about', shortName: '~/a', href: '#about' },
        { name: 'ps -skills', shortName: 'ps', href: '#skills' },
        { name: 'ls ~/projects', shortName: 'ls', href: '#projects' },
        { name: 'cat resume.txt', shortName: 'cat', href: '#experience' },
        { name: './contact.sh', shortName: './c', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
            ? 'dark:bg-[#0a0a0c]/80 bg-[#f8f7f4]/80 backdrop-blur-md dark:border-b dark:border-primary/20 border-b border-gray-200 py-4 dark:shadow-lg dark:shadow-primary/5 shadow-sm'
            : 'bg-transparent py-6'
            }`}>
            <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                <a href="#" className="text-2xl font-mono font-bold tracking-tighter dark:text-gray-100 text-gray-800 group">
                    DG<span className="dark:text-primary text-primary-light group-hover:animate-pulse">_</span>
                </a>

                {/* Desktop Nav */}
                <ul className="hidden md:flex space-x-8 items-center font-mono text-sm">
                    {navLinks.map((link, i) => (
                        <li key={i}>
                            <a href={link.href} className="dark:text-gray-400 text-gray-500 dark:hover:text-primary hover:text-primary-light transition-colors duration-200">
                                <span className="dark:text-primary/60 text-primary-light/60 mr-1">0{i + 1}.</span>
                                {link.name}
                            </a>
                        </li>
                    ))}

                    {/* Theme Toggle */}
                    <li>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg dark:bg-gray-800/50 bg-gray-200/50 dark:hover:bg-gray-700 hover:bg-gray-300 transition-all duration-300 dark:text-primary text-primary-light"
                            aria-label="Toggle theme"
                        >
                            {theme === 'dark' ? (
                                <i className="fas fa-sun text-lg"></i>
                            ) : (
                                <i className="fas fa-moon text-lg"></i>
                            )}
                        </button>
                    </li>

                    <li>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="dark:border-primary border-primary-light dark:text-primary text-primary-light border px-4 py-2 rounded-[4px] dark:hover:bg-primary/10 hover:bg-primary-light/10 transition-colors">
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-lg dark:bg-gray-800/50 bg-gray-200/50 dark:text-primary text-primary-light"
                        aria-label="Toggle theme"
                    >
                        {theme === 'dark' ? (
                            <i className="fas fa-sun"></i>
                        ) : (
                            <i className="fas fa-moon"></i>
                        )}
                    </button>
                    <button className="dark:text-primary text-primary-light text-xl focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full dark:bg-[#0a0a0c]/95 bg-[#f8f7f4]/95 backdrop-blur-lg dark:border-b dark:border-primary/20 border-b border-gray-200 py-4 flex flex-col items-center space-y-6">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.href} onClick={() => setMobileMenuOpen(false)} className="dark:text-gray-300 text-gray-600 font-mono text-lg dark:hover:text-primary hover:text-primary-light">
                            <span className="dark:text-primary/60 text-primary-light/60 mr-2">0{i + 1}.</span>{link.name}
                        </a>
                    ))}
                    <a href="/resume.pdf" className="dark:border-primary border-primary-light dark:text-primary text-primary-light border px-6 py-2 rounded-[4px] font-mono">
                        Resume
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
