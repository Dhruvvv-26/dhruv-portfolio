import { useEffect, useRef, useState } from 'react';

export default function MetricSparkline({ value, label, color = '#00E5FF', animate = true }) {
    const canvasRef = useRef(null);
    const [displayed, setDisplayed] = useState('0.00');
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (animate && !hasAnimated) {
            setHasAnimated(true);
        }
    }, [animate, hasAnimated]);

    useEffect(() => {
        if (!hasAnimated) return;
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const points = [];
        let frame = 0;
        const totalFrames = 60;
        let animId;

        const draw = () => {
            const progress = frame / totalFrames;
            const noise = (1 - progress) * (Math.random() - 0.5) * 0.3;
            const current = parseFloat(value) * progress + noise;
            points.push(Math.max(0, Math.min(1, current / parseFloat(value))));

            const cw = canvas.width;
            const ch = canvas.height;
            ctx.clearRect(0, 0, cw, ch);
            ctx.strokeStyle = color;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            points.forEach((p, i) => {
                const x = (i / totalFrames) * cw;
                const y = ch - p * (ch - 5);
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
            });
            ctx.stroke();

            setDisplayed((parseFloat(value) * progress).toFixed(value.toString().includes('.') ? 2 : 0));

            if (++frame <= totalFrames) {
                animId = requestAnimationFrame(draw);
            } else {
                setDisplayed(value);
            }
        };

        draw();
        return () => { if (animId) cancelAnimationFrame(animId); };
    }, [hasAnimated, value, color]);

    return (
        <div className="flex flex-col items-center gap-1">
            <canvas ref={canvasRef} width={120} height={40} className="opacity-70 max-w-full" />
            <span className="font-mono text-xl sm:text-2xl font-bold" style={{ color }}>
                {displayed}
            </span>
            <span className="text-[10px] sm:text-xs dark:text-gray-400 text-gray-500 uppercase tracking-widest text-center">
                {label}
            </span>
        </div>
    );
}
