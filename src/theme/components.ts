import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
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
        "&.color_secondary": {
          color: "#fff",
        },
        background: "#669bbc",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: 8,
        boxShadow:
          "0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
        color: "#fff",
        fontSize: "0.65rem",
        padding: "5px 0",
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        "&.grid_base": {
          border: `2px solid ${theme.palette.primary.light}`,
          borderRadius: "16px",
        },
        "&.grid_drawer": {
          background: theme.palette.primary.main,
          border: "none",
          minHeight: "100%",
        },
        "&.grid_test": {
          background: theme.palette.primary.light,
          borderRadius: "16px",
        },
        "&.login": {
          background: theme.palette.primary.main,
        },
        width: "100%",
      },
    },
  },
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.7rem",
        lineHeight: "1.4rem",
      },
    },
  },

  MuiListItemButton: {
    styleOverrides: {
      root: {
        "&.active": {
          backgroundColor: theme.palette.primary.light,
          border: `1px solid ${theme.palette.primary.contrastText}`,
        },
        borderRadius: "8px 0 0 8px",
        color: "red",
        paddingBottom: 12,
        paddingTop: 12,
      },
    },
  },
  MuiLoadingButton: {
    styleOverrides: {
      root: {
        background: "#669bbc",
        border: "1px solid inherit",
        color: "#fff",
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
  MuiSvgIcon: {
    styleOverrides: {
      root: {
        color: theme.palette.grey[700],
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        "&.color_secondary": {
          color: theme.palette.text.secondary,
        },
        color: theme.palette.text.primary,
      },
    },
  },
});

export { createThemeComponents };
