import { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import { useAppSelector } from "../../hooks";
import { createMuiTheme } from "../../theme";

const SettingsProvider = ({ children }: { children: ReactNode }) => {
  const { colorMode } = useAppSelector((state) => state.SettingsReducer);
  const currentColorMode = localStorage.getItem("dashboardTheme") ?? colorMode;

  const theme = useMemo(() => {
    return createMuiTheme({ mode: currentColorMode as "dark" | "light" });
  }, [colorMode, currentColorMode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            backgroundColor: theme.palette.primary.dark,
            margin: "0",
          },
        }}
      />
      {children}
    </ThemeProvider>
  );
};

export default SettingsProvider;
