import React, { ReactNode, useMemo } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "@mui/material";

import { useAppSelector } from "../../hooks";
import { createMuiTheme } from "../../theme";
import SnackBar from "../SnackBar/SnackBar";

const SettingsProvider = ({ children }: { children: ReactNode }) => {
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
				}}
			/>
			{children}
			<SnackBar />
		</ThemeProvider>
	);
};

export default SettingsProvider;
