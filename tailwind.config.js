/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"*/**/*.jsx",
		"*/**/*.js",
		"*/**/*.ts",
		"*/**/*.tsx",
		"./index.html",
	],
	theme: {
		extend: {
			fontFamily: {
				para: ["'Exo 2'", "sans-serif"],
			},
			// colors: {
			// 	neutral: "#EEF5F7",
			// 	"neutral-content": "#020036",
			// 	highlight: "#99D1FF",
			// 	"highlight-content": "#0046B7",
			// },
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			"lofi",
			{
				iiec_dark: {
					primary: "#2d2f39",
					"primary-focus": "#343642",
					"primary-content": "#f1f2eb",
					"primary-content-tp": "#f1f2eb33",
					secondary: "#8c66b7",
					"secondary-focus": "#8151B8",
					"secondary-content": "#ffffff",
					accent: "#39a9db",
					"accent-focus": "#4AAFDE",
					"accent-content": "#ffffff",
					neutral: "#0B0C0E",
					"neutral-tp": "#0B0C0E33",
					"neutral-focus": "#16181D",
					"neutral-content": "#fefefe",
					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#d1d5db",
					"base-content": "#16181D",
					info: "#2094f3",
					success: "#009485",
					warning: "#ff9900",
					error: "#ff5724",
				},
			},
			{
				iiec_light: {
					primary: "#f1f2eb",
					"primary-focus": "#e4e5de",
					"primary-content": "#1C1C22",
					secondary: "#8c66b7",
					"secondary-focus": "#8151B8",
					"secondary-content": "#ffffff",
					accent: "#39a9db",
					"accent-focus": "#4AAFDE",
					"accent-content": "#ffffff",
					neutral: "#f1f2eb",
					"neutral-focus": "#E7E9DD",
					"neutral-content": "#0E0E11",
					"base-100": "#16181D",
					"base-200": "#1C1C22",
					"base-300": "#d1d5db",
					"base-content": "#fefefe",
					info: "#2094f3",
					success: "#009485",
					warning: "#ff9900",
					error: "#ff5724",
				},
			},
		],
	},
};
