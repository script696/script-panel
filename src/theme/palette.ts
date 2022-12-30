import { PaletteMode } from "@mui/material";

const palette = {
  grey: {
    "50": "#ECEFF1",
    "100": "#CFD8DC",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
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
    main: palette.grey[900],
    dark: palette.grey[800],
    light: palette.grey[700],
    contrastText: palette.grey[600],
  },
  text: {
    primary: palette.grey[100],
    secondary: palette.grey[700],
    disabled: palette.grey[600],
  },
};

const lightPalette = {
  ...palette,
  mode: "light" as PaletteMode,
  background: {
    default: "#669bbc",
  },
  primary: {
    main: "#95775A",
    dark: "#E6E3E1",
    light: "#ddbea9",
    contrastText: "#f0efeb",
  },
  text: {
    primary: "#FFFFFF",
    secondary: palette.red[900],
    disabled: palette.grey[600],
  },
};

export { darkPalette, lightPalette };
