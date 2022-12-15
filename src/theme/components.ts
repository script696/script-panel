import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 16,
      },
    },
  },
  MuiLoadingButton: {
    styleOverrides: {
      root: {
        padding: "16px 0",
        borderRadius: 16,
      },
    },
  },
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
  MuiGrid: {
    styleOverrides: {
      root: {
        "&.login": {
          background: theme.palette.grey[100],
        },
      },
    },
  },
});

export { createThemeComponents };
