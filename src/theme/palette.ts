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
		"700": "#B37840",
		"800": "#E6E3E1",
		"900": "#95775A",
	},
};

const darkPalette = {
	...palette,
	mode: "dark" as PaletteMode,
	primary: {
		contrastText: "#fff",
		dark: "#0d1b2a",
		light: "#415a77",
		main: "#1b263b",
	},
	text: {
		alt: palette.grey[400],
		disabled: palette.grey[600],
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
		contrastText: "#f0efeb",
		dark: "#E6E3E1",
		light: "#ddbea9",
		main: "#95775A",
	},
	text: {
		disabled: palette.grey[600],
		primary: "#FFFFFF",
		secondary: palette.red[900],
	},
};

export { darkPalette, lightPalette };
