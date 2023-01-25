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
				"&.button_styles_none": {
					background: "none",
					border: "none",
					boxShadow: "none",
					padding: 0,
				},
				"&.color_secondary": {
					color: "#fff",
				},
				"&.style_ghost": {
					background: "none",
					border: `1.5px solid ${theme.palette.primary.light}`,
					boxShadow: "none",
					color: theme.palette.text.secondary,
					padding: "5px 20px",
					textTransform: "none",
				},
				background: theme.palette.primary.light,
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

	MuiFormControlLabel: {
		styleOverrides: {
			label: {
				color: theme.palette.primary.main,
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
				"&.grid_dark": {
					background: theme.palette.primary.main,
					border: "none",
					minHeight: "100%",
				},
				"&.grid_style_bordered": {
					borderRadius: "16px",
				},
				"&.grid_style_box-shadow": {
					boxShadow:
						"0px 3px 7px 8px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)",
				},
				"&.grid_test": {
					boxShadow: "0px 0px 15px -1px rgba(34, 60, 80, 0.34)",
				},
				"&.login": {
					background: theme.palette.primary.main,
				},

				width: "100%",
			},
		},
	},
	MuiInputBase: {
		styleOverrides: {
			root: {
				"& .MuiOutlinedInput-notchedOutline": {
					borderColor: theme.palette.primary.light,
					borderWidth: "1.5px",
				},
				color: theme.palette.primary.light,
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
				padding: "5px 20px",
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
	MuiSwitch: {
		styleOverrides: {
			root: {
				"& .MuiSwitch-switchBase": {
					color: theme.palette.primary.light,
				},
				"& .MuiSwitch-switchBase.Mui-checked": {
					color: "#fff",
				},
				"& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
					backgroundColor: "#fff",
				},
				"&.color_dark .MuiSwitch-switchBase": {
					color: theme.palette.primary.main,
				},
				"&.color_dark .MuiSwitch-switchBase+.MuiSwitch-track": {
					backgroundColor: "none",
					border: `2px solid ${theme.palette.primary.main}`,
					boxSizing: "border-box",
				},
				"&.color_dark .MuiSwitch-switchBase.Mui-checked": {
					color: theme.palette.primary.main,
				},
				"&.color_dark .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
					backgroundColor: theme.palette.primary.dark,
					boxSizing: "border-box",
				},

				color: "red",
			},
		},
	},

	MuiTabList: {
		styleOverrides: {
			root: {
				"&.test": {
					display: "flex",
					flexDirection: "column",
				},
				display: "flex",
				flexDirection: "column",
			},
		},
	},
	MuiTabPanel: {
		styleOverrides: {
			root: {
				padding: 0,
			},
		},
	},
	MuiTabs: {
		styleOverrides: {
			flexContainer: {
				gap: "15px",
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
