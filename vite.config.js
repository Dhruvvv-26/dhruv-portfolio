import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    'd3-vendor': ['d3'],
                    'router': ['react-router-dom'],
                    'react-core': ['react', 'react-dom'],
                },
            },
        },
    },
});
