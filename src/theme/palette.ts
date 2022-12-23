import { PaletteMode } from "@mui/material";

const palette = {
  grey: {
    "50": "#ECEFF1",
    "100": "#CFD8DC",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
    "500": "#16171b",
    "600": "#0284c7",
    "700": "#222327",
    "800": "#37474F",
    "900": "#16171b",
  },
};
//fiolet #7c3aed
// blue #0284c7
//red #bb432c
//yellow #ecb613
//#06152B
//#364153
const darkPalette = {
  ...palette,
  mode: "dark" as PaletteMode,
  background: {
    paper: palette.grey[900],
    default: palette.grey[800],
    light: palette.grey[200],
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
