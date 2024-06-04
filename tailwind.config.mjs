import starlightPlugin from "@astrojs/starlight-tailwind";

// Generated color palettes
const accent = {
  200: "#8bd8de",
  600: "#007b83",
  900: "#003a3e",
  950: "#002a2d",
};
const gray = {
  100: "#f6f6f6",
  200: "#edeeed",
  300: "#c1c2c2",
  400: "#8a8c8b",
  500: "#575858",
  700: "#373838",
  800: "#262727",
  900: "#181818",
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  plugins: [starlightPlugin()],
  theme: {
    extend: {
      colors: { accent, gray },
    },
  },
};
