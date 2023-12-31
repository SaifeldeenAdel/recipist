/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./node_modules/flowbite-react/**/*.js",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				logo: ["var(--caveat)"],
				sans: ["var(--raleway)"],
				sans2: ["var(--montserrat)"],
			},
			colors: {
				background: "#fffdf9",
				primary: "#b61249",
				secondary: "#fcf5f6",
				"secondary-accent": "#ffd5de",
				accent: "#831237",
				dark: "#050505",
				text: "#130207",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("flowbite/plugin")],
};
