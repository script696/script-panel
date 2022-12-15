import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { createMuiTheme } from "../theme";
import { GlobalStyles } from "@mui/material";

const theme = createMuiTheme({ mode: "dark" });

export const SettingsContext = createContext({});

const SettingsProvider = ({ children }: any) => {
  return (
    <SettingsContext.Provider value={{}}>
      <ThemeProvider theme={theme}>
        <GlobalStyles
          styles={{
            body: {
              backgroundColor: theme.palette.background.paper,
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
