import { Theme } from "@mui/material";

const createThemeComponents = (theme: Theme) => ({
	MuiAvatar: {
		styleOverrides: {
			root: {
				background: "none",
			},
		},
	},
	MuiButton: {
		styleOverrides: {
			root: {
				"&.button_styles_none": {
					"&:hover": {
						background: "none",
					},
					background: "none",
					border: "none",
					boxShadow: "none",
					padding: 0,
				},
				"&.color_secondary": {
					color: "#fff",
				},
				"&.style_ghost": {
					"&:hover": {
						borderColor: theme.palette.primary.contrastText,
						color: theme.palette.primary.contrastText,
					},
					background: "none",
					border: `1.5px solid ${theme.palette.primary.light}`,
					boxShadow: "none",
					color: theme.palette.text.secondary,
					textTransform: "none",
				},
				"&:hover": {
					background: "#fff",
					color: theme.palette.text.secondary,
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
	MuiDrawer: {
		styleOverrides: {
			root: {
				width: "100%",
			},
		},
	},

	MuiFormControlLabel: {
		styleOverrides: {
			label: {
				color: theme.palette.primary.dark,
			},
		},
	},
	MuiGrid: {
		styleOverrides: {
			root: {
				"&.grid_border_light": {
					border: `2px solid ${theme.palette.primary.light}`,
				},
				"&.grid_dark": {
					background: theme.palette.primary.dark,
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
				width: "100%",
			},
		},
	},
	MuiLink: {
		styleOverrides: {
			root: {
				"&:hover": {
					opacity: "1",
				},
				opacity: "0.8",
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
			},
		},
	},

	MuiSvgIcon: {
		styleOverrides: {
			root: {
				"&.color_contrastText": {
					color: theme.palette.primary.contrastText,
				},
				"&.color_secondary": {
					color: theme.palette.text.secondary,
				},
				color: theme.palette.text.primary,
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
					color: theme.palette.primary.dark,
				},
				"&.color_dark .MuiSwitch-switchBase+.MuiSwitch-track": {
					backgroundColor: "none",
					border: `2px solid ${theme.palette.primary.dark}`,
					boxSizing: "border-box",
				},
				"&.color_dark .MuiSwitch-switchBase.Mui-checked": {
					color: theme.palette.primary.dark,
				},
				"&.color_dark .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
					backgroundColor: theme.palette.primary.main,
					boxSizing: "border-box",
				},

				color: "red",
			},
		},
	},
	MuiTab: {
		styleOverrides: {
			root: {
				color: theme.palette.text.secondary,
				fontSize: "0.7rem",
				padding: "0 0 10px 0",
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
	MuiTable: {
		styleOverrides: {
			root: {
				backgroundColor: theme.palette.primary.dark,
			},
		},
	},
	MuiTabs: {
		styleOverrides: {
			indicator: {
				backgroundColor: theme.palette.text.secondary,
				height: "0.08rem",
			},
			root: {
				minHeight: "auto",
			},
		},
	},
	MuiTextField: {
		styleOverrides: {
			root: {
				"& input": {
					"& .style_dark": {
						color: "green",
					},
					"& fieldset": {
						borderColor: theme.palette.primary.light,
					},
					"&.Mui-focused fieldset": {
						borderColor: theme.palette.primary.dark,
					},
					"&:hover fieldset": {
						borderColor: theme.palette.primary.contrastText,
					},
					color: theme.palette.primary.contrastText,
				},
				"& label": {
					"&.Mui-focused": {
						color: theme.palette.primary.contrastText,
					},
					color: theme.palette.primary.contrastText,
					fontSize: "0.7rem",
					lineHeight: "1.4rem",
				},
				"&.style_dark .MuiOutlinedInput-root": {
					"& fieldset": {
						borderColor: theme.palette.primary.dark,
					},
					"&.Mui-focused fieldset": {
						borderColor: theme.palette.primary.dark,
					},
					"&:hover fieldset": {
						borderColor: theme.palette.primary.dark,
					},
					color: theme.palette.primary.contrastText,
				},
				"&.style_dark input": { color: theme.palette.text.secondary },
				"&.style_dark label": { color: theme.palette.text.secondary },
			},
		},
	},
	MuiTypography: {
		styleOverrides: {
			root: {
				"&.color_contrastText": {
					color: theme.palette.primary.contrastText,
				},
				"&.color_secondary": {
					color: theme.palette.text.secondary,
				},
				color: theme.palette.text.primary,
			},
		},
	},
});

export { createThemeComponents };
