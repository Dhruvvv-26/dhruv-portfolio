import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import * as d3 from 'd3';

export default function CyberBackground() {
    const svgRef = useRef(null);
    const { theme } = useTheme();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const w = window.innerWidth;
        const h = window.innerHeight;
        const svg = d3.select(svgRef.current)
            .attr('width', w)
            .attr('height', h);

        svg.selectAll('*').remove();

        // Delay D3 init so hero renders first
        const initTimer = setTimeout(() => {
            const nodes = Array.from({ length: 28 }, (_, i) => ({
                id: i,
                ip: `192.168.${Math.floor(i / 8)}.${(i % 8) * 10 + 1}`,
            }));

            const links = Array.from({ length: 42 }, () => ({
                source: Math.floor(Math.random() * 28),
                target: Math.floor(Math.random() * 28),
            }));

            const nodeColor = theme === 'dark' ? '#00E5FF22' : '#0A5C6B22';
            const edgeColor = theme === 'dark' ? '#00E5FF15' : '#0A5C6B20';

            const link = svg.append('g').selectAll('line')
                .data(links).join('line')
                .attr('stroke', edgeColor)
                .attr('stroke-width', 0.8);

            const node = svg.append('g').selectAll('circle')
                .data(nodes).join('circle')
                .attr('r', 3)
                .attr('fill', nodeColor)
                .attr('stroke', theme === 'dark' ? '#00E5FF55' : '#0A5C6B55')
                .attr('stroke-width', 1);

            const sim = d3.forceSimulation(nodes)
                .force('link', d3.forceLink(links).distance(80))
                .force('charge', d3.forceManyBody().strength(-60))
                .force('center', d3.forceCenter(w / 2, h / 2))
                .on('tick', () => {
                    link
                        .attr('x1', (d) => d.source.x)
                        .attr('y1', (d) => d.source.y)
                        .attr('x2', (d) => d.target.x)
                        .attr('y2', (d) => d.target.y);
                    node
                        .attr('cx', (d) => d.x)
                        .attr('cy', (d) => d.y);
                });

            const interval = setInterval(() => {
                const target = nodes[Math.floor(Math.random() * nodes.length)];
                const nodeEl = node.nodes()[target.id];
                if (nodeEl) {
                    d3.select(nodeEl)
                        .transition().duration(300).attr('fill', '#FF444488').attr('r', 6)
                        .transition().duration(300).attr('r', 3)
                        .transition().duration(300).attr('r', 6)
                        .transition().duration(500).attr('fill', nodeColor).attr('r', 3);
                }
            }, 4000);

            const handleResize = () => {
                const newW = window.innerWidth;
                const newH = window.innerHeight;
                svg.attr('width', newW).attr('height', newH);
                sim.force('center', d3.forceCenter(newW / 2, newH / 2));
                sim.alpha(0.3).restart();
            };
            window.addEventListener('resize', handleResize);

            // Store cleanup refs on the svg element
            svgRef.current._cleanup = () => {
                clearInterval(interval);
                window.removeEventListener('resize', handleResize);
                sim.stop();
                svg.selectAll('*').remove();
            };
        }, 800);

        return () => {
            clearTimeout(initTimer);
            if (svgRef.current?._cleanup) {
                svgRef.current._cleanup();
            }
            svg.selectAll('*').remove();
        };
    }, [theme, isMobile]);

    if (isMobile) {
        return <div className="fixed inset-0 dark:bg-[#0a0a0c] bg-[#F4F0E8] -z-10" />;
    }

    return (
        <>
            <svg
                ref={svgRef}
                className="fixed inset-0 pointer-events-none z-0 opacity-40"
            />
            <div className="noise-overlay fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-15 mix-blend-overlay" />
        </>
    );
}
