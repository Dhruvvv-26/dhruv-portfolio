import React, { useState, useEffect } from 'react';

const lines = [
    '> UNAUTHORIZED ACCESS DETECTED',
    '> Scanning identity...',
    '> Identity verified: Recruiter',
    '> [ACCESS GRANTED]',
    '> Deploying resume...',
];

export default function AccessGrantedOverlay() {
    const [visibleLines, setVisibleLines] = useState([]);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        lines.forEach((line, i) => {
            setTimeout(() => {
                setVisibleLines((prev) => [...prev, line]);
            }, i * 300);
        });

        // After all lines + 1.5s delay, open resume and fade out
        setTimeout(() => {
            window.open('/resume.pdf', '_blank');
            setFadeOut(true);
        }, lines.length * 300 + 1500);
    }, []);

    return (
        <div
            className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-700 ${fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.95)' }}
        >
            <div className="font-mono text-left space-y-2 p-8 max-w-lg">
                {visibleLines.map((line, i) => (
                    <div
                        key={i}
                        className={`text-lg ${line.includes('ACCESS GRANTED')
                                ? 'text-green-400 font-bold text-xl'
                                : line.includes('UNAUTHORIZED')
                                    ? 'text-red-400'
                                    : 'text-cyan-400'
                            }`}
                    >
                        {line}
                    </div>
                ))}
                {visibleLines.length < lines.length && (
                    <span className="inline-block w-2 h-5 bg-cyan-400 animate-pulse" />
                )}
            </div>
        </div>
    );
}
