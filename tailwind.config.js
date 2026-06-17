/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bqa: {
          blue: '#BAD7FD', // Total Karakteristik (pastel blue)
          green: '#C2F0C2', // Status Kualitas (pastel green)
          gray: '#D2D6DC', // Tools Digunakan (pastel gray)
          tan: '#EAD1B3', // Skor Rata-rata (pastel tan)
          cardBg: '#DCE6F5', // Result Card Soft Blue
          textDark: '#1E293B', // Dark slate text color for headers
          textMedium: '#475569', // Medium slate text color for body
          // Category/Severity Colors
          sangatBaik: '#52B766', // Green
          cukup: '#FB923C', // Orange
          buruk: '#8A5E38', // Brown/Red as shown in Figma legend ("Buruk" label)
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
