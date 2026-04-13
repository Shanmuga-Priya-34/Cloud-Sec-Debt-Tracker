/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B1120', // Very dark blue/black
        surface: '#1E293B',    // Slate 800
        surfaceAlt: '#334155', // Slate 700
        border: '#475569',     // Slate 600
        primary: '#38BDF8',    // Light Blue (Sky 400)
        danger: '#F87171',     // Red 400
        success: '#34D399',    // Emerald 400
        warning: '#FBBF24',    // Amber 400
      }
    },
  },
  plugins: [],
}
