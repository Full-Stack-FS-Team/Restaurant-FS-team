/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#FF6363",
      },
      backgroundImage: {
        homeBanner: "url('/images/demo-restaurant-home-banner-bg.jpg')",
      },
    },
  },
  plugins: [],
};
