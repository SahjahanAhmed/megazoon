/** @type {import('tailwindcss').Config} */
/**@type { import("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap") }*/

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      ubuntu: ["ubuntu"],
      dongle: ["dongle,sans-serif"],
    },
    height: {
      "10vh": "10vh",
      "100vh": "100vh ",
      "150px": "150px",
      "200px": "200px",
      "250px": "250px",
      "300px": "300px",
      "350px": "350px",
    },
    width: {
      "100vw": "100vw",
      "80vw": "80vw",
      "90vw": "90vw",
      "10vw": "10vw",
      "20vw": "20vw",
      "30vw": "30vw",
      "40vw": "40vw",
      "50vw": "50vw",
      "60vw": "60vw",
      "70vw": "70vw",
      "20%": "20%",
      "40%": "40%",
      "80%": "80%",
      "100%": "100%",
      "150px": "150px",
      "200px": "200px",
      "250px": "250px",
      "300px": "300px",
      "350px": "350px",
    },
    maxHeight: {
      "300px": "300px",
      "250px": "250px",
      "200px": "200px",
    },
    maxWidth: {
      "300px": "300px",
      "250px": "250px",
      "200px": "200px",
    },
    miWidth: {
      "300px": "300px",
      "200px": "200px",
    },
    minHeight: {
      "300px": "300px",
      "200px": "200px",
      "150px": "150px",
      "100px": "100px",
    },

    screens: {
      xs: "460px",
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      "2xl": "1536px",
    },
  },
  plugins: [],
};
