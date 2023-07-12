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
				background: "#f0eee2",
				light: "#F4F3EE",
				light2: "#e2dec6",
				dark: "#071108",
				primaryBlue: "#616fe9",
				secondaryBlue: "#4958e2",
				primaryRed: "#f54868",
				secondaryRed: "#fc3055",
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
