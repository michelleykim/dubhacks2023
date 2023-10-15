/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

module.exports = {
	darkMode: "class",
	content: [
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./pages/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			black: "#121314",
			grey: "#343541",
			white: "#ffffff",
			...colors,
		},
		extend: {},
	},
	plugins: [],
};
