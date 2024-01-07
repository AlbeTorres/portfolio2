const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				"green-color": "#27AE60",
				"gray-color": "#828282",
				"card-color": "#212121",
				"color-background": "#171717",
				"menu-color": "#172554"
			},
			backgroundImage: {},
			animation: {
				updown: "updown 3s linear infinite"
			},
			keyframes: {
				updown: {
					"0%": {
						transform: "translateY(-20px)"
					},
					"50%": {
						transform: "translateY(20px)"
					},
					"100%": {
						transform: "translateY(-20px)"
					}
				}
			}
		}
	},
	plugins: [require("daisyui")]
};
