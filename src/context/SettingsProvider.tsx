import { createContext, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";
import { useAppSelector } from "../hooks/useAppSelector";
import { createMuiTheme } from "../theme";

export const SettingsContext = createContext({});

const SettingsProvider = ({ children }: any) => {
  const { colorMode } = useAppSelector((state) => state.SettingsReducer);
  const currentColorMode = localStorage.getItem("dashboardTheme") ?? colorMode;
  // const theme = createMuiTheme({ mode: "dark" });

  // useEffect(() => {
  //   console.log(colorMode);
  // }, [colorMode]);
  const theme = useMemo(() => {
    console.log(currentColorMode);
    return createMuiTheme({ mode: currentColorMode as "dark" | "light" });
  }, [colorMode, currentColorMode]);

  return (
    <SettingsContext.Provider value={{}}>
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
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
