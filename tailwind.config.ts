import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1", // AI futuristic blue-purple
        secondary: "#8B5CF6", // Softer purple for accents
        accent: "#22C55E", // Neon green for glowing highlights
        background: "#121826", // Dark, but not too black
        foreground: "#F3F4F6", // Light text for readability
        darkBackground: "#1C2333", // Softened dark mode background
        darkForeground: "#E5E7EB", // Improved contrast
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, rgba(99,102,241,0.25) 0%, rgba(0,0,0,0) 80%)",
      },
    },
  },
  plugins: [],
};

export default config;
