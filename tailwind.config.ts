import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["'Lora'", "serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      colors: {
        forest:  "#1c2b1a",
        bark:    "#3b2a1a",
        soil:    "#5c3d1e",
        wood:    "#8b5e3c",
        honey:   "#c9893a",
        straw:   "#e2c27d",
        parch:   "#f5e6c8",
        linen:   "#faf3e4",
        cream:   "#fffdf7",
        moss:    "#4a5e3a",
        sage:    "#7a8f6a",
      },
      backgroundImage: {
        "wood-grain": "url('/wood-grain.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
