/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Scan tous les fichiers React
      "../backend/templates/**/*.html", // Scan les templates Django
      "../backend/static/**/*.css" // Scan les fichiers CSS de Django
    ],
    theme: {
      extend: {},
    },
    plugins: [],
};