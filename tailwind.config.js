/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Lato', 'sans-serif'],
      },
    
      colors: {
        primary: {
          DEFAULT: '#A12C28', 
        },
        Secondary: {
          DEFAULT: '#EF7F1A',
        },
        Lightcolor: {
          DEFAULT: "#ffa726", // Fixed with '#'
        },
      }
    },
  },

  plugins: [],
}
