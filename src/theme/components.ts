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
        borderRadius: 12,
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
        width: "100%",
        "&.login": {
          background: theme.palette.grey[500],
          backgroundImage:
            "linear-gradient( to left, transparent, rgba(255, 255, 255, .125) 20%, rgba(255, 255, 255, .125) 80%, transparent )",
        },
        "&.grid_base": {
          background: theme.palette.grey[700],
          borderRadius: "16px",
          backgroundImage:
            "linear-gradient( to left, rgba(255, 255, 255, .125) 50%, rgba(255, 255, 255, .125) 50%, transparent )",
        },
      },
    },
  },
  // MuiButton: {
  //   styleOverrides: {
  //     root: {
  //       textTransform: "none" as any,
  //       padding: "0",
  //       fontSize: "0.9rem",
  //       fontWeight: theme.typography.fontWeightRegular,
  //       borderRadius: "10px",
  //       "&.variantOne": {
  //         background: theme.palette.grey[100],
  //         width: "100%",
  //         padding: "10px 0",
  //         color: theme.palette.text.primary,
  //       },
  //       "&.button_login": {
  //         background: theme.palette.grey[600],
  //         padding: "10px 0",
  //         color: theme.palette.text.primary,
  //       },
  //     },
  //   },
  // },
});

export { createThemeComponents };
