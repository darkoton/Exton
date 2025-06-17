/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ], theme: {
    colors: {
      'white': '#fff',
      'green': '#39D885',
      'sky-blue': '#2666DE',
      'blue': '#3826DE',
      'purple': '#7F26DE',
    },
    extend: {
      backgroundImage: {
        'white-purple-gradient': 'linear-gradient(91deg, #fff 0%, #524ba0 100%)',
        'white-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
      },
    },
  },
  plugins: [],
}

