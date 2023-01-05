import { darkPalette, lightPalette } from "./palette";
import { createTheme } from "@mui/material/styles";
import { createThemeComponents } from "./components";
import typography from "./typography";

interface ICreateMuiTheme {
  mode: "dark" | "light";
}

const createMuiTheme = ({ mode }: ICreateMuiTheme) => {
  const palette = mode === "dark" ? darkPalette : lightPalette;

  const baseTheme = createTheme({
    palette,
    typography,
  });

  return createTheme(
    {
      components: createThemeComponents(baseTheme),
    },
    baseTheme
  );
};

export { createMuiTheme };
