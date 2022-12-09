import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
  MuiListItemButton: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        borderRadius: 16,
        paddingTop: 12,
        paddingBottom: 12,
        "&.active": {
          backgroundColor: theme.palette.background.default,
        },
      },
    },
  },
});

export { createThemeComponents };
