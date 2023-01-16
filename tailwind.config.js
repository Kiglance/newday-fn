/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl: { max: "1100px" },
        lg: { max: "820px" },
        md: { max: "640px" },
        sm: { max: "440px" },
        "semi-md": "820px",
        "semi-sm": { max: "320px" },
      },
    },
  },
  plugins: [],
};
