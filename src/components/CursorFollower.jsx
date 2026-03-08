import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function CursorFollower() {
    const { theme } = useTheme();
    const [pos, setPos] = useState({ x: 0, y: 0 });

    // Don't render on touch devices
    if (typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0)) return null;

    useEffect(() => {
        const handler = (e) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handler);
        return () => window.removeEventListener('mousemove', handler);
    }, []);

    if (theme !== 'dark') return null;

    return (
        <>
            <div
                className="cursor-dot"
                style={{ left: pos.x, top: pos.y }}
            />
            <div
                className="cursor-ring"
                style={{ left: pos.x, top: pos.y }}
            />
        </>
    );
}
