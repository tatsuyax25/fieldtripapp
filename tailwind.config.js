// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // This is where Vite will look for Tailwind classes
    "./src/**/*.{js,jsx,ts,tsx}", // Your React components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
