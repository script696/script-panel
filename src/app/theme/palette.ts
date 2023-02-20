import { PaletteMode } from "@mui/material";

const palette = {
	grey: {
		"100": "#CFD8DC",
		"200": "#B0BEC5",
		"300": "#90A4AE",
		"400": "#78909C",
		"50": "#ECEFF1",
		"500": "#e0e1dd",
		"600": "#778da9",
		"700": "#415a77",
		"800": "#1b263b",
		"900": "#0d1b2a",
	},
	red: {
		"600": "#f0efeb",
		"700": "#ef7810",
		"800": "#E6E3E1",
		"900": "#95775A",
	},
};

const darkPalette = {
	...palette,
	mode: "dark" as PaletteMode,
	primary: {
		contrastText: "#CFD8DC",
		dark: "#0d1b2a",
		light: "#415a77",
		main: "#1b263b",
	},
	text: {
		primary: "#CFD8DC",
		secondary: "#0d1b2a",
	},
};

const lightPalette = {
	...palette,
	background: {
		default: "#669bbc",
	},
	mode: "light" as PaletteMode,
	primary: {
		contrastText: "#4A403A",
		dark: "#4A403A",
		light: "#a49c93",
		main: "#EFEFEF",
	},
	text: {
		primary: "#fff",
		secondary: "#4A403A",
	},
};

export { darkPalette, lightPalette };
// dark: "#E6E3E1",
// 	light: "#ddbea9",
// 	main: "#95775A",
