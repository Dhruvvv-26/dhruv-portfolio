import { useEffect, useState } from 'react';

const KONAMI = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a',
];

export function useKonamiCode() {
    const [active, setActive] = useState(false);
    const [seq, setSeq] = useState([]);

    useEffect(() => {
        const handler = (e) => {
            setSeq((prev) => {
                const next = [...prev, e.key].slice(-10);
                if (JSON.stringify(next) === JSON.stringify(KONAMI)) {
                    setActive(true);
                    setTimeout(() => setActive(false), 5000);
                }
                return next;
            });
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, []);

    return active;
}
