import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        rock: "#8257A6",
      },
    },
  },
  plugins: [],
};
export default config;
