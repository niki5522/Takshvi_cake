/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ Required to scan React files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
