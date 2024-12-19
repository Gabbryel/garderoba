/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: "#e3c476",
        pink: "#eed7ce",
        customIndigo: "#15182ecc",
      },
      fontFamily: {
        sans: ["raleway", "sans-serif"],
        serif: ["raleway", "serif"],
      },
      minWidth: {
        "100dvw": "100dvw",
      },
    },
  },
  plugins: [],
};
