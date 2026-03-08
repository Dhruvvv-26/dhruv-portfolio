import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FadeInSection from './FadeInSection';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;
        const mailtoLink = `mailto:dhruvgupta.atwork@gmail.com?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;
        window.location.href = mailtoLink;
    };

    return (
        <section id="contact" className="py-32 px-6 max-w-5xl mx-auto border-t section-divider">
            <FadeInSection>
                <p className="font-mono dark:text-primary text-primary-light mb-4 tracking-wider text-center">06. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold font-sans dark:text-gray-100 text-gray-900 mb-8 text-center">
                    Initiate_Handshake
                </h2>
                <p className="dark:text-gray-400 text-gray-600 text-lg mb-12 leading-relaxed max-w-2xl mx-auto font-sans text-center">
                    Currently open for 2027 ML/security engineering roles and exciting technical challenges. If you're building resilient intelligence systems or need help securing infrastructure, let's connect.
                </p>
            </FadeInSection>

            <FadeInSection delay={100}>
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {/* Contact Form */}
                    <div className="glass-card p-8">
                        <h3 className="text-xl font-bold font-sans dark:text-gray-200 text-gray-800 mb-6 flex items-center gap-2">
                            <i className="fas fa-paper-plane dark:text-primary text-primary-light"></i> Send a Message
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-sm font-mono dark:text-gray-500 text-gray-400 mb-1 block">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 dark:bg-black/30 bg-gray-50 dark:border-gray-700 border-gray-200 border rounded-lg font-sans dark:text-gray-200 text-gray-800 dark:placeholder-gray-600 placeholder-gray-400 dark:focus:border-primary focus:border-primary-light focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-mono dark:text-gray-500 text-gray-400 mb-1 block">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    placeholder="Your email"
                                    className="w-full px-4 py-3 dark:bg-black/30 bg-gray-50 dark:border-gray-700 border-gray-200 border rounded-lg font-sans dark:text-gray-200 text-gray-800 dark:placeholder-gray-600 placeholder-gray-400 dark:focus:border-primary focus:border-primary-light focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-mono dark:text-gray-500 text-gray-400 mb-1 block">Message</label>
                                <textarea
                                    rows="4"
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    placeholder="Your message"
                                    className="w-full px-4 py-3 dark:bg-black/30 bg-gray-50 dark:border-gray-700 border-gray-200 border rounded-lg font-sans dark:text-gray-200 text-gray-800 dark:placeholder-gray-600 placeholder-gray-400 dark:focus:border-primary focus:border-primary-light focus:outline-none transition-colors resize-vertical"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 dark:bg-primary/10 bg-primary-light/10 dark:border-primary border-primary-light border dark:text-primary text-primary-light font-mono rounded-lg dark:hover:bg-primary/20 hover:bg-primary-light/20 transition-all"
                            >
                                <i className="fas fa-terminal mr-2"></i> Send Message
                            </button>
                        </form>
                    </div>

                    {/* Direct Contact */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-6">
                            <a href="mailto:dhruvgupta.atwork@gmail.com" className="flex items-center p-5 glass-card group">
                                <i className="fas fa-envelope text-xl dark:text-primary text-primary-light mr-4 dark:group-hover:animate-pulse"></i>
                                <div>
                                    <p className="text-sm font-mono dark:text-gray-500 text-gray-400">Email</p>
                                    <p className="font-sans dark:text-gray-200 text-gray-800">dhruvgupta.atwork@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/dhruv-gupta-dg2608" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 glass-card group">
                                <i className="fab fa-linkedin text-xl dark:text-primary text-primary-light mr-4"></i>
                                <div>
                                    <p className="text-sm font-mono dark:text-gray-500 text-gray-400">LinkedIn</p>
                                    <p className="font-sans dark:text-gray-200 text-gray-800">dhruv-gupta-dg2608</p>
                                </div>
                            </a>

                            <a href="https://github.com/Dhruvvv-26" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 glass-card group">
                                <i className="fab fa-github text-xl dark:text-primary text-primary-light mr-4"></i>
                                <div>
                                    <p className="text-sm font-mono dark:text-gray-500 text-gray-400">GitHub</p>
                                    <p className="font-sans dark:text-gray-200 text-gray-800">Dhruvvv-26</p>
                                </div>
                            </a>

                            <a href="https://leetcode.com/u/Dhruvvv_26/" target="_blank" rel="noopener noreferrer" className="flex items-center p-5 glass-card group">
                                <i className="fas fa-code text-xl dark:text-primary text-primary-light mr-4"></i>
                                <div>
                                    <p className="text-sm font-mono dark:text-gray-500 text-gray-400">LeetCode</p>
                                    <p className="font-sans dark:text-gray-200 text-gray-800">Dhruvvv_26</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </FadeInSection>

            {/* Footer */}
            <FadeInSection delay={200}>
                <footer className="text-center pt-12 dark:border-t dark:border-gray-800 border-t border-gray-200">
                    <div className="flex justify-center space-x-8 mb-8">
                        <a href="https://github.com/Dhruvvv-26" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-2xl">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href="https://linkedin.com/in/dhruv-gupta-dg2608" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-2xl">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="https://leetcode.com/u/Dhruvvv_26/" target="_blank" rel="noopener noreferrer" className="dark:text-gray-500 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors text-2xl">
                            <i className="fas fa-code"></i>
                        </a>
                    </div>
                    <p className="font-mono dark:text-gray-600 text-gray-400 text-sm mb-2">
                        &gt; System built by <span className="dark:text-primary/70 text-primary-light/70">Dhruv Gupta</span>
                    </p>
                    <p className="font-mono dark:text-gray-600 text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} // STATUS: ONLINE
                    </p>
                    <Link to="/stack" className="font-mono text-xs dark:text-gray-600 text-gray-400 dark:hover:text-primary hover:text-primary-light transition-colors mt-3 inline-block">
                        [/stack]
                    </Link>
                </footer>
            </FadeInSection>
        </section>
    );
};

export default Contact;
