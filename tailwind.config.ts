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
        // Main Color Palette
        teal: {
          DEFAULT: "#62AFA7",
          dark: "#008080",
        },
        blue: {
          DEFAULT: "#488BAA",
          50: "#f0f7fa",
          100: "#d9ebf4",
          200: "#b3d7e9",
          300: "#8cc3de",
          400: "#66afd3",
          500: "#488BAA",
          600: "#3a6f88",
          700: "#2b5366",
          800: "#1d3744",
          900: "#0e1c22",
        },
        green: {
          DEFAULT: "#61B116",
          50: "#f2f9e9",
          100: "#e5f3d3",
          200: "#cbe7a7",
          300: "#b1db7b",
          400: "#97cf4f",
          500: "#61B116",
          600: "#4e8e12",
          700: "#3a6b0d",
          800: "#274709",
          900: "#132404",
        },
        navy: {
          DEFAULT: "#002734",
          50: "#e6f2f5",
          100: "#cce5eb",
          200: "#99cbd7",
          300: "#66b1c3",
          400: "#3397af",
          500: "#002734",
          600: "#001f2a",
          700: "#001720",
          800: "#001015",
          900: "#00080b",
        },
        light: "#F4F6FC",
        // Supplementary Colors
        peach: "#FFCB80",
        yellow: "#FFEA80",
        cyan: "#CCFFFF",
        mint: "#38D1B4",
        sage: "#58A2A0",
        gold: "#DFCE6A",
        cream: "#FFFFE7",
        seafoam: "#93CFC3",
        lime: "#97BD00",
      },
      fontFamily: {
        klein: ["var(--font-klein)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
        "public-sans": ["var(--font-public-sans)", "sans-serif"],
        "league-gothic": ["var(--font-league-gothic)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
