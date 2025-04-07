// @ts-check
/* import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind"; */
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        // Iconos de redes sociales
        "simple-icons": [
          "github",
          "linkedin",
          "twitter",
          "instagram",
          "facebook",
        ],

        // Iconos Material Design para UI
        mdi: [
          "link-variant",
          "email-outline",
          "map-marker",
          "phone",
          "arrow-up",
          "menu",
          "close",
          "send",
          "chevron-up",
          "chevron-down",
          "chevron-right",
          "chevron-left",
          "account",
          "web",
          "calendar",
          "clock",
          "star",
          "heart",
          "home",
          "github",
          "link",
          "open-in-new",
        ],
      },
    }),
  ],
});
