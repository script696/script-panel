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
};
const test = {
  main: "#222327",
  secondary: "#222327",
};

const darkPalette = {
  ...palette,
  mode: "dark" as PaletteMode,
  background: {
    paper: "#a69eb0",
    default: "#000000",
    light: "#f2e2cd",
  },
  primary: {
    main: "#64B5F6",
    contrastText: palette.grey[900],
  },
  text: {
    primary: palette.grey[100],
    secondary: palette.grey[300],
    disabled: palette.grey[600],
  },
};

const lightPalette = {
  ...palette,
  background: {
    paper: palette.grey[900],
    default: palette.grey[800],
    light: palette.grey[200],
  },
};

export { darkPalette, lightPalette };
