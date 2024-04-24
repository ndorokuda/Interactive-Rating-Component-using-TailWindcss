/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        neutral: {
          white: ' hsl(0, 0%, 100%)',
          grey: {
            100: 'hsl(217, 12%, 63%)',
            200: ' hsl(216, 12%, 54%)',
            300: ' hsl(216, 12%, 54%,0.1)',
          },
          blue: {
            100: 'hsl(213, 19%, 18%)',
            200: 'hsl(216, 12%, 8%)',
            300: 'hsl(213, 19%, 18%,0.7)',
          },
        },
      },
      fontFamily: {
        body: ['Overpass'],
      },
    },
  },
  plugins: [],
};
