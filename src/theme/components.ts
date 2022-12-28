import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
  MuiInputLabel: {
    styleOverrides: {
      root: {
        fontSize: "0.7rem",
        lineHeight: "1.4rem",
        // padding: "5px 5px",
      },
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: 10,
        // padding: "5px 5px",
      },
    },
  },
  MuiLoadingButton: {
    styleOverrides: {
      root: {
        background: theme.palette.grey[600],
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
        border: `2px solid ${theme.palette.grey[600]}`,
        background: "none",
        color: "#fff",
        fontSize: "0.65rem",
      },
    },
  },
  MuiListItemButton: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
        borderRadius: "8px 0 0 8px",
        paddingTop: 12,
        paddingBottom: 12,
        "&.active": {
          backgroundColor: theme.palette.grey[700],
        },
      },
    },
  },
  MuiGrid: {
    styleOverrides: {
      root: {
        width: "100%",
        "&.login": {
          background: theme.palette.grey[900],
          // backgroundImage:
          //   "linear-gradient( to left, transparent, rgba(255, 255, 255, .125) 20%, rgba(255, 255, 255, .125) 80%, transparent )",
        },
        "&.grid_base": {
          background: theme.palette.grey[700],
          borderRadius: "16px",

          // backgroundImage:
          //   "linear-gradient( to left, rgba(255, 255, 255, .125) 50%, rgba(255, 255, 255, .125) 50%, transparent )",
          // boxShadow: "inset 10px 10px 10px rgba(000, 000, 000, 0.9)",
        },
        "&.grid_drawer": {
          minHeight: "100%",
          background: theme.palette.grey[900],
          border: "none",
          // backgroundImage:
          //   "linear-gradient( to left, rgba(255, 255, 255, .125) 50%, rgba(255, 255, 255, .125) 50%, transparent )",
        },
      },
    },
  },
  MuiTypography: {
    styleOverrides: {
      root: {
        color: theme.palette.text.primary,
      },
    },
  },
});

export { createThemeComponents };
