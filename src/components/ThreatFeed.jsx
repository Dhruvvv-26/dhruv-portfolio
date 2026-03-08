import { useState, useEffect } from 'react';

const THREAT_TYPES = ['PHISHING', 'FRAUD', 'ACCT_TAKEOVER', 'BRUTE_FORCE', 'NORMAL', 'NORMAL'];

const genAlert = () => {
    const type = THREAT_TYPES[Math.floor(Math.random() * THREAT_TYPES.length)];
    const score = type === 'NORMAL'
        ? (Math.random() * 0.2).toFixed(2)
        : (0.75 + Math.random() * 0.24).toFixed(2);
    const ip = `${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    return { id: Date.now() + Math.random(), type, score, ip, time };
};

export default function ThreatFeed() {
    const [alerts, setAlerts] = useState(() => Array.from({ length: 4 }, genAlert));
    const [minimized, setMinimized] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setAlerts((prev) => [genAlert(), ...prev.slice(0, 6)]);
        }, 3500);
        return () => clearInterval(interval);
    }, []);

    const color = (type) =>
        type === 'NORMAL' ? '#00C853' : type === 'FRAUD' ? '#FF4444' : '#FFB300';

    if (minimized) {
        return (
            <button
                onClick={() => setMinimized(false)}
                className="fixed bottom-4 right-4 z-50 bg-[#0D1117] border border-[#00E5FF33] text-[#00E5FF] font-mono text-xs px-3 py-2 rounded cursor-pointer hover:bg-[#0D1117CC] transition-colors"
            >
                ● THREAT FEED
            </button>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 sm:w-[22rem] bg-[#0D1117] border border-[#00E5FF22] rounded font-mono text-xs text-gray-300 shadow-2xl">
            <div className="flex justify-between items-center px-3 py-2 border-b border-[#00E5FF22]">
                <span className="text-[#00E5FF] font-bold">LIVE THREAT FEED</span>
                <div className="flex gap-2 items-center">
                    <span className="text-green-400">● ACTIVE</span>
                    <button
                        onClick={() => setMinimized(true)}
                        className="text-gray-500 hover:text-white ml-2 cursor-pointer"
                    >
                        −
                    </button>
                </div>
            </div>
            <div className="overflow-hidden h-28">
                {alerts.map((a, i) => (
                    <div
                        key={a.id}
                        style={{ opacity: 1 - i * 0.18, transition: 'all 0.4s ease' }}
                        className="px-3 py-1 flex gap-2 items-center border-b border-[#ffffff08]"
                    >
                        <span className="text-gray-500">[{a.time}]</span>
                        <span
                            style={{ color: color(a.type) }}
                            className="w-[100px] flex-shrink-0 font-bold"
                        >
                            {a.type}
                        </span>
                        <span className="text-gray-400 flex-1 text-right sm:text-left">{a.ip}</span>
                        <span style={{ color: color(a.type) }} className="flex-shrink-0">:{a.score}</span>
                    </div>
                ))}
            </div>
            <div className="px-3 py-1 text-gray-600 text-right">
                <a
                    href="https://github.com/Dhruvvv-26/AI-Threat-Intelligence-Banking.git"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#00E5FF] transition-colors"
                >
                    Powered by ATIS
                </a>
            </div>
        </div>
    );
}
