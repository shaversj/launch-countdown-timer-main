/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    extend: {
      backgroundImage: {
        "bg-stars": "url('./src/assets/images/bg-stars.svg')"
      },
      colors: {
        "grayish-blue": "hsl(237, 18%, 59%)",
        "soft-red": "hsl(345, 95%, 68%)",
        "white": "hsl(0, 0%, 100%)",
        "dark-desaturated-blue": "hsl(236, 21%, 26%)",
        "very-dark-blue": "hsl(235, 16%, 14%)",
        "very-dark-mostly-black-blue": "hsl(234, 17%, 12%)",
        "custom-purple": "hsl(270, 18.9%, 15.5%)"
      },
      fontFamily: {
        redHatText: ["Red Hat Text", "sans-serif"]
      }
    },
  },
  plugins: [],
}

