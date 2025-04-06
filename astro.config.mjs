// @ts-check
/* import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; */
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
