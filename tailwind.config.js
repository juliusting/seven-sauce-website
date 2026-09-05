export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        seal:   '#C0392B',   /* red seal accent */
        'seal-dark': '#9B2D22',
        chili:  '#E67E22',   /* warm secondary */
        cream:  '#FBF7F0',   /* page bg */
        'cream-alt': '#F3ECE0',
        ink:    '#2A2420',   /* body text */
        'ink-muted': '#6E6259',
        line:   '#E7DDCD',
        jade:   '#2E6E68',   /* fresh accent nod to interior blue-green */
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: { expo: 'cubic-bezier(0.16, 1, 0.3, 1)' },
      maxWidth: { container: '1220px' },
    },
  },
  plugins: [],
}
