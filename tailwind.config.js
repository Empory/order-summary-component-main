/** @type {import('tailwindcss').Config} */
module.exports = {
   mode:"jit",
   content: ["./css/**/*.{html}"],
  theme: {
    extend: {
     fontFamily:{
      display:['"Red Hat Display"', 'sans-serif'],
     }
    },
  },
  plugins: [],
}
