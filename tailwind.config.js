/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'white': 'var(--white)',
      'black': 'var(--white)',
      'green': {
        300: 'var(--green-300)'
      },
      'blue': {
        400: 'var(--blue-400)',
        500: 'var(--blue-500)',
      },
      'purple': {
        600: 'var(--purple-600)'
      },
    },
    extend: {
      backgroundImage: {
        'white-purple-gradient': 'linear-gradient(91deg, #fff 0%, #524ba0 100%)',
        'white-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Geologica: 'Geologica, sans-serif',
    },
  },
  plugins: [],
}

