/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f2f8f4',
          100: '#e1efe5',
          200: '#c5e0cf',
          300: '#9ec9b0',
          400: '#6fa98b',
          500: '#488c6c',
          600: '#376e57',
          700: '#2c5846',
          800: '#254639',
          900: '#1f3b30',
          950: '#10201a',
        },
        pastel: {
          cream: '#FAF7f2',
          mint: '#EBF4EE',
          sage: '#E3EDE6',
          peach: '#FDF3ED',
          card: '#F6FAf7',
          border: '#D8E5DD',
        },
        darkText: '#1A2921',
        mutedText: '#4B6354',
      },
      fontFamily: {
        fredoka: ['var(--font-fredoka)', 'Fredoka', 'sans-serif'],
        sans: ['var(--font-plus-jakarta)', 'Plus Jakarta Sans', 'sans-serif'],
      },
      maxWidth: {
        'content': '1360px',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(-5px)' },
          '50%': { transform: 'translateY(5px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
