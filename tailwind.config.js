/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Colores inspirados en Feid
        "feid-green": "#00FF7F", // Verde neón principal
        "feid-purple": "#9D00FF", // Púrpura neón
        "feid-pink": "#FF2D9E", // Rosa neón
        "feid-blue": "#00F0FF", // Azul eléctrico
        "feid-dark": "#0F0F0F", // Negro principal
        "feid-dark-gray": "#1E1E1E", // Gris oscuro
        "feid-light": "#E0E0E0", // Blanco
        "feid-light-gray": "#F5F5F5", // Gris claro
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { filter: "brightness(1)" },
          "50%": { filter: "brightness(1.3)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
