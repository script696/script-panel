import { PaletteMode } from "@mui/material";

const palette = {
  grey: {
    "50": "#ECEFF1",
    "100": "#CFD8DC",
    "200": "#B0BEC5",
    "300": "#90A4AE",
    "400": "#78909C",
    "500": "#607D8B",
    "600": "#546E7A",
    "700": "#455A64",
    "800": "#37474F",
    "900": "#263238",
  },
};

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
