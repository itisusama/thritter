/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        typewriter: ['JMH Typewriter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}