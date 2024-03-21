/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-1": "#6fa6ff",
        "blue-2": "#3462AE",
        "blue-3": "#1b335a",
      },
    },
  },
  plugins: [],
};
