/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        accent: {
          1: "hsl(var(--color-accent1) / <alpha-value>)",
          2: "hsl(var(--color-accent2) / <alpha-value>)",
          /* alpha-value enables the usage of opacity */
        },
        bkg: {
          1: "hsl(var(--color-bkg) / <alpha-value>)",
          2: "hsl(var(--color-bkg-content) / <alpha-value>)",
          3: "hsl(var(--color-bkg-content-item) / <alpha-value>)",
        },
        content: {
          1: "hsl(var(--color-content) / <alpha-value>)",
          2: "hsl(var(--color-text-hover) / <alpha-value>)",
          3: "hsl(var(--color-bkg) / <alpha-value>)",
        },
        hover: "hsl(var(--color-hover) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
