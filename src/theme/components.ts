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
        padding: "8px 0",
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
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: "none" as any,
        padding: "0",
        fontSize: "1rem",
        fontWeight: theme.typography.fontWeightRegular,
        "&.variantOne": {
          background: theme.palette.grey[600],
          width: "100%",
          padding: "10px 0",
          color: theme.palette.text.primary,
        },
      },
    },
  },
});

export { createThemeComponents };
