/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
				logo:["var(--logo)"],
				sans:["var(--logo)"],
			},
			colors: {
        light: "#F4F3EE",
				dark: "#071108",
				primaryBlue: "#6874E8",
				secondaryBlue: "#4859f7",
        primaryRed: "#f54868",
        secondaryRed: "#fc3055",
			},
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
