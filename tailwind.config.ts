import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Colores nerd personalizados
        'nerd-bg': '#0b1020',
        'nerd-panel': '#0f1530',
        'nerd-text': '#e5e7eb',
        'nerd-muted': '#94a3b8',
        'nerd-primary': '#7c3aed',
        'nerd-accent': '#f59e0b',
        'nerd-ok': '#10b981',
        'nerd-green': '#00ff99',
        'nerd-fuchsia': '#ff00ff',
        'nerd-cyan': '#00ccff',
        'nerd-yellow': '#ffcc00',
      },
      fontFamily: {
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },
      backgroundImage: {
        'nerd-gradient':
          'radial-gradient(1200px 800px at 80% -10%, #161d3a 0%, #0b1020 55%), radial-gradient(600px 400px at -10% 110%, #1b2347 0%, transparent 60%), #0b1020',
      },
      animation: {
        typing: 'typing 4s steps(36,end)',
        blink: 'blink 0.8s step-end infinite',
      },
      keyframes: {
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
