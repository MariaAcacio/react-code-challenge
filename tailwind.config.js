/** @type {import('tailwindcss').Config} */
import tailwindScrollbar from "tailwind-scrollbar";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
    "./src/layouts/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "poke-yellow": "#FFCC01",
        "poke-blue": "#3462AE",
        "poke-red": "#E33E3E",
      },
    },
  },
  plugins: [tailwindScrollbar({ nocompatible: true })],
});
