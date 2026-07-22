export default {
  content: ['./index.html','./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F4F4F0',
        ink: '#000000',
        signal: '#FF2A2A',
        mint: '#00E5FF',
        violet: '#FFD000',
        alert: '#FF2A2A',
      },
      boxShadow: {
        'brutal': '4px 4px 0px 0px #000',
        'brutal-lg': '8px 8px 0px 0px #000',
        'brutal-sm': '2px 2px 0px 0px #000',
      },
      fontFamily: {
        mono: ['"Space Mono"', 'monospace'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        jet: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
