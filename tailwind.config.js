/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        body: ['Lato', 'sans-serif'],
      },

      colors: {
        primary: {
          DEFAULT: '#A12C28', 
        },
        Secondary: {
          DEFAULT: '#C6765C',
        },
        Lightcolor: {
          DEFAULT: "#EF7F1A",
        },
      }
    },
  },

  plugins: [],
}
