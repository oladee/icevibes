import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily:{
        beachday: ['Beachday','sans-serif'],
        switzer: ['Switzer', 'sans-serif']
      },
      backgroundImage : {
        herobg : "url('/herobg.png')",
        herobgmob : "url('/herobgmob.png')"
      },
      backgroundPosition : {
        'bottom' : '2rem bottom 0.5rem'
      },
      backgroundSize: {
        '50%': '50%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%',
        '16': '40rem',
      }
      
    },
  },
  plugins: [],
} satisfies Config;
