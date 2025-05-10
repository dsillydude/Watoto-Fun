const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class", // Enable class-based dark mode
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html", // Make sure index.html is included for font loading
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Comic Neue", ...fontFamily.sans],
      },
      borderRadius: {
        "4xl": "2rem", // Existing
        "5xl": "2.5rem", // Existing
        "6xl": "3rem", // Existing
        "hero": "20px", // Add specific 20px radius for hero section
      },
      spacing: {
        // Assuming px-4 (1rem/16px) was the original padding
        // 80% reduction: 16px * 0.2 = 3.2px. Let's use px-1 (0.25rem/4px) as the closest standard Tailwind value.
        // If a more precise value is needed, we could define a custom one like '1p': '3.2px', but px-1 is simpler.
      }
    },
  },
  plugins: [],
}
