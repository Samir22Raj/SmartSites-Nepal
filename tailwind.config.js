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
				card: "#FFFFFF4D",
				"off-white": "#F5F5F5",
			},
			backgroundImage: {
				services: "url('/images/vector.png')",
			},
		},
	},
	plugins: [],
};
