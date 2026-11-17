import tailwindcss from '@tailwindcss/vite';
import fs from 'fs';
import path from 'path';
import {defineConfig} from 'vite';

const htmlPages = [
  'index.html',
  'architecture.html',
  'arenas-elo.html',
  'contests.html',
  'ai-core.html',
  'security-qprt4.html',
  'academies.html',
  'pricing.html',
  'socials-forge.html',
  'governance.html',
  'roadmap.html',
  'pioneers.html',
];

export default defineConfig(() => {
  const input: Record<string, string> = {};
  for (const page of htmlPages) {
    input[page.replace('.html', '')] = path.resolve(__dirname, page);
  }

  return {
    base: './',
    plugins: [
      tailwindcss(),
      {
        name: 'copy-static-root-assets',
        apply: 'build',
        closeBundle(error?: Error): void {
          if (error) return;
          const distDir = path.resolve(__dirname, 'dist');
          for (const file of ['favicon.jpg', '.nojekyll']) {
            const src = path.resolve(__dirname, file);
            const dest = path.resolve(distDir, file);
            if (fs.existsSync(distDir) && fs.existsSync(src)) {
              fs.copyFileSync(src, dest);
            }
          }
        },
      },
    ],
    build: {
      rollupOptions: {
        input,
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
