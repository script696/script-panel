import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.7rem",
        lineHeight: "1.4rem",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,
      },
    },
  },
  MuiLoadingButton: {
    styleOverrides: {
      root: {
        background: "#669bbc",
        color: "#fff",
        border: "1px solid inherit",
      },
    },
  },
  MuiAvatar: {
    styleOverrides: {
      root: {
        background: "#ffffff",
      },
    },
  },

  MuiButton: {
    styleOverrides: {
      root: {
        padding: "5px 0",
        borderRadius: 8,
        border: `1px solid ${theme.palette.primary.contrastText}`,
        background: "#669bbc",
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        color: "#fff",
        fontSize: "0.65rem",
        "&.color_secondary": {
          color: "#fff",
        },
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        color: "red",
        borderRadius: "8px 0 0 8px",
        paddingTop: 12,
        paddingBottom: 12,
        "&.active": {
          backgroundColor: theme.palette.primary.light,
          border: `1px solid ${theme.palette.primary.contrastText}`,
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        width: "100%",
        "&.login": {
          background: theme.palette.primary.main,
        },
        "&.grid_base": {
          borderRadius: "16px",
          border: `2px solid ${theme.palette.primary.light}`,
        },
        "&.grid_test": {
          background: theme.palette.primary.light,
          borderRadius: "16px",
        },
        "&.grid_drawer": {
          minHeight: "100%",
          background: theme.palette.primary.main,
          border: "none",
        },
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        "&.color_secondary": {
          color: theme.palette.text.secondary,
        },
      },
    },
  },
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: theme.palette.grey[700],
      },
    },
  },
});

export { createThemeComponents };
