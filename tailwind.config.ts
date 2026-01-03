import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-general-sans)", "ui-sans-serif", "system-ui"],
      },
      letterSpacing: {
        tight2: "-0.02em",
      },
    },
  },
  plugins: [],
} satisfies Config;
