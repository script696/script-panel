import { createContext } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          color: "#506",
          borderRadius: 16,
          paddingTop: 12,
          paddingBottom: 12,
          "&.active": {
            backgroundColor: "#000",
            color: "#506",
          },
        },
      },
    },
    // MuiListItemButton: {
    //   styleOverrides: {
    //     root: {
    //       borderRadius: 16,
    //       paddingTop: 12,
    //       paddingBottom: 12,
    //       "&.Mui-selected": {
    //         backgroundColor: "#506",
    //         color: "#506",
    //       },
    //     },
    //   },
    // },
  },
});

export const SettingsContext = createContext({});

const SettingsProvider = ({ children }: any) => {
  return (
    <SettingsContext.Provider value={{}}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
