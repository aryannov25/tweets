module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
     

      lg: { max: "2000px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "1024px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }

      xsm: { max: "480px" },
      // => @media (max-width: 480px) { ... }

      mob: { max: "360px" },
      // => @media (max-width: 360px) { ... }
    },
    extend: {
      width: {
        108: "28rem",
        128: "32rem",
        140: "36rem",
        152: "40rem",
      },
    },
  },
  plugins: [],
}
