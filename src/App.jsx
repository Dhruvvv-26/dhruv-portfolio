import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useKonamiCode } from './hooks/useKonamiCode';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import CursorFollower from './components/CursorFollower';
import AccessGrantedOverlay from './components/AccessGrantedOverlay';
import ThreatFeed from './components/ThreatFeed';

// Lazy-loaded heavy components
const CyberBackground = lazy(() => import('./components/CyberBackground'));
const Skills = lazy(() => import('./components/Skills'));
const Stack = lazy(() => import('./pages/Stack'));

function HomePage() {
    const konamiActive = useKonamiCode();
    const { theme } = useTheme();

    return (
        <div className="min-h-screen relative overflow-hidden">
            <Suspense fallback={<div className="fixed inset-0 dark:bg-[#0a0a0c] bg-[#F4F0E8] -z-10" />}>
                <CyberBackground />
            </Suspense>
            <CursorFollower />
            <Navbar />

            <main>
                <Hero />
                <About />
                <Suspense fallback={<div className="w-full h-32" />}>
                    <Skills />
                </Suspense>
                <Projects />
                <Experience />
                <Contact />
            </main>

            {konamiActive && <AccessGrantedOverlay />}
            {theme === 'dark' && <ThreatFeed />}
        </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/stack"
                        element={
                            <Suspense fallback={<div className="w-full h-32" />}>
                                <Stack />
                            </Suspense>
                        }
                    />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
