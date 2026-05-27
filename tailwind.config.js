/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Pastikan ada bintang ganda (**) seperti ini agar mendeteksi src/components/elements/
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}