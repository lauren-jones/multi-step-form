/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#EFF5FF",
        white: "#FFF",
        denim: "#022959",
        gray: "#9699AA",
        "sky-blue": "#BEE2FD",
        "light-gray": "#D6D9E6",
        "bright-purple": "#483EFF",
        "very-light-gray": "#F8F9FF",
        error: "#F51880",
      },
    },
  },
  plugins: [],
};
