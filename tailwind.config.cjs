/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ['"Inter"'],
    },
    extend: {
      textColor: {
        skin: {
          primary: "hsl(var(--color-red))",
          secondary: "hsl(var(--color-orange))",
          muted: "hsl(var(--color-dark-grayish-blue))",
          blue: "hsl(var(--color-grayish-blue))",
          dark: "hsl(var(--color-very-dark-blue))",
          white: "hsl(var(--color-off-white))",
        },
      },
      backgroundColor: {
        skin: {
          primary: "hsl(var(--color-red))",
          secondary: "hsl(var(--color-orange))",
          muted: "hsl(var(--color-dark-grayish-blue))",
          blue: "hsl(var(--color-grayish-blue))",
          dark: "hsl(var(--color-very-dark-blue))",
          white: "hsl(var(--color-off-white))",
        },
      },
    },
  },

  plugins: [],
};
