/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#2B3A67",
          secondary: "#46568C",
          accent: "#D4A017",
          background: "#F2F4F8",
          text: "#1D2233",
  
          darkBg: "#0F172A",
          darkCard: "#111827",
          darkText: "#E5E7EB",
          darkMuted: "#9CA3AF",
        },
      },
    },
    plugins: [],
  };
  