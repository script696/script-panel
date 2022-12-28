import { createContext } from "react";
import { ThemeProvider } from "@mui/material/styles";
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
              backgroundColor: theme.palette.grey[800],
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
