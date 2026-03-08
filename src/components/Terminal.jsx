import { useState, useRef, useEffect } from 'react';

const COMMANDS = {
    whoami: () => [
        'Dhruv Gupta',
        'CS @ SRMIST Chennai | CGPA: 9.55/10',
        'Focus: ML × Cybersecurity × Infrastructure',
    ],
    'cat skills.txt': () => [
        'Languages: Python, C++, C, JavaScript',
        'ML: PyTorch, XGBoost, Isolation Forest, YOLO, ArcFace',
        'Systems: Kubernetes, Docker, OCI, Linux',
        'Web: FastAPI, React.js, WebSockets',
    ],
    'ls projects/': () => [
        'drwxr-xr-x  ai-threat-intel/',
        'drwxr-xr-x  cybersentinel/',
        'drwxr-xr-x  k9-kubernetes/',
        'drwxr-xr-x  smart-attendance/',
        'drwxr-xr-x  aptos-trading/',
    ],
    'cat contact.txt': () => [
        'email: dhruvgupta.atwork@gmail.com',
        'linkedin: /in/dhruv-gupta-dg2608',
        'github: github.com/Dhruvvv-26',
        'leetcode: leetcode.com/u/Dhruvvv_26',
    ],
    'sudo hire dhruv': () => [
        '[sudo] password for recruiter: ••••••••',
        'Verifying credentials...',
        '[ACCESS GRANTED] — Opening resume...',
    ],
    help: () => [
        'Available commands:',
        '  whoami           — about Dhruv',
        '  cat skills.txt   — technical skills',
        '  ls projects/     — list projects',
        '  cat contact.txt  — contact info',
        '  sudo hire dhruv  — download resume',
        '  clear            — clear terminal',
    ],
    clear: () => null,
};

export default function Terminal() {
    const [history, setHistory] = useState([
        { type: 'system', text: 'dhruv@portfolio:~$ Type a command. Try: help' },
    ]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    const handleCommand = (cmd) => {
        const trimmed = cmd.trim().toLowerCase();
        if (trimmed === 'clear') {
            setHistory([]);
            return;
        }
        const fn = COMMANDS[trimmed];
        const output = fn
            ? fn()
            : [`command not found: ${trimmed}. Try 'help'`];
        setHistory((h) => [
            ...h,
            { type: 'input', text: `dhruv@portfolio:~$ ${cmd}` },
            ...output.map((line) => ({ type: 'output', text: line })),
        ]);
        if (trimmed === 'sudo hire dhruv') {
            setTimeout(() => window.open('/resume.pdf'), 2000);
        }
    };

    useEffect(
        () => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }),
        [history]
    );

    return (
        <div className="dark:bg-[#0d1117] bg-gray-50 dark:border-[#00E5FF33] border-gray-200 border rounded-lg p-4 font-mono text-sm h-48 md:h-64 overflow-y-auto">
            {history.map((line, i) => (
                <div
                    key={i}
                    className={
                        line.type === 'input'
                            ? 'dark:text-cyan-400 text-primary-light'
                            : line.type === 'system'
                                ? 'dark:text-gray-500 text-gray-400'
                                : 'dark:text-gray-300 text-gray-600'
                    }
                >
                    {line.text}
                </div>
            ))}
            <div ref={bottomRef} className="flex items-center gap-2 mt-1">
                <span className="dark:text-cyan-400 text-primary-light">
                    dhruv@portfolio:~$
                </span>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleCommand(input);
                            setInput('');
                        }
                    }}
                    className="bg-transparent outline-none dark:text-gray-200 text-gray-800 flex-1"
                    style={{ fontSize: '16px' }}
                    autoFocus
                    placeholder="_"
                />
            </div>
        </div>
    );
}
