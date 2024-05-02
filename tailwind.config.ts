import type {Config} from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				gray_dark: "#333",
				gray_medium: "#5C5C5C",
				gray_light: "#828282",
				gray_background: "#F5F5F5",
				gray_border: "#E0E0E0",
			},
		},
	},
	plugins: [],
};
export default config;
