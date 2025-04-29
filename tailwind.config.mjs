/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
	screens: {
		sm: "640px",
		md: "760px",
		lg: "960px",
		xl: "1200px",
	},
	fontFamily: {
		primary: "var(--font-dmSans)",
		secondary: "var(--font-barlow)",
	},
	container: {
	  center: true,
	  padding: "15px",
  },
  	extend: {
		colors: {
			primary: "#121315",
			secondary: "#666666",
			accent: "#ffca3b",
			border: "#d7d7d7",
		},
		boxShadow: {
			custom: "0px 4px 54px 10px rgba(18, 19, 21, 0.06)"
		},
		backgroundImage: {
			hero: "url('/assets (1)/assets/img/hero/bg.jpg')",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
