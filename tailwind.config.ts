import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "greycolor",
        foreground: "var(--foreground)",
          primary: "#ffbd39",
    
        
      },
    },
  },
  plugins: [],
};
export default config;
