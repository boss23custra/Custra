import { copyFileSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

export default {
  plugins: [
    {
      name: 'copy-browser-babel-entry',
      closeBundle() {
        const dist = resolve('dist');
        mkdirSync(dist, { recursive: true });
        copyFileSync(resolve('landing.jsx'), resolve(dist, 'landing.jsx'));
        copyFileSync(resolve('custra-mark.svg'), resolve(dist, 'custra-mark.svg'));
      },
    },
  ],
};
