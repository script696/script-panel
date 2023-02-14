import React, { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

import { useAppSelector } from "../../../shared/lib/hooks";
import { createMuiTheme } from "../../../app/theme";

const ThemeLayout = ({ children }: { children: ReactNode }) => {
	const { colorMode } = useAppSelector((state) => state.UiReducer);
	const currentColorMode = localStorage.getItem("dashboardTheme") ?? colorMode;

	const theme = useMemo(() => {
		return createMuiTheme({ mode: currentColorMode as "dark" | "light" });
	}, [colorMode, currentColorMode]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles
				styles={{
					body: {
						backgroundColor: theme.palette.primary.main,
						margin: "0",
					},
					html: {
						fontSize: "16px",
						[theme.breakpoints.down("xs")]: {
							fontSize: "12px",
						},
						[theme.breakpoints.between("sm", "md")]: {
							fontSize: "16px",
						},
						[theme.breakpoints.between("md", "lg")]: {
							fontSize: "18px",
						},
						[theme.breakpoints.between("lg", "xl")]: {
							fontSize: "20px",
						},
						[theme.breakpoints.up("xl")]: {
							fontSize: "23px",
						},
					},
				}}
			/>
			{children}
		</ThemeProvider>
	);
};

export default ThemeLayout;
