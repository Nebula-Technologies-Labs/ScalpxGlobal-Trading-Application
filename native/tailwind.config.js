/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        backgroundSecondary: "#EBECEE",
        border: "#EBECED",
        brand: "#538BE3",
        brandBg: "#E7F1FD",
        danger: "#D16D69",
        dangerBg: "#FBE9E9",
        sucess: "#68B26C",
        sucessBg: "#E9F5E9",   
        buttonPrimary: "#4185F4",
        buttonDanger: "#DF514D",
        buttonSuccess: "#4CB050",
        textPrimary: "#434250",
        textMuted: "#A3A3B3",
        textSecondary: "#484854",
      },
    },
  },
  plugins: [],
};
