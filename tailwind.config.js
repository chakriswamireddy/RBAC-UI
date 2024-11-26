/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#14b8a6",
          "secondary": "#9333ea",
          "accent": "#00ffff",
          "neutral": "#6b7280",
          "base-100": "#e5e7eb",
          "info": "#3b82f6",
          "success": "#84cc16",
          "warning": "#d97706",
          "error": "#be185d",
        },
      },
    ],
  },
}

