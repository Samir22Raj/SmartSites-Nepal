/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*"],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
			},
			colors: {
				"black-new": "#0F0A09",
				yellow: "#F1BC1E",
			},
			backgroundImage: {
				services: "url('/images/vector.png')",
			},
		},
	},
	plugins: [],
};
