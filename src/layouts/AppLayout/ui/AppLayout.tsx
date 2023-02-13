import React, { ReactNode } from "react";

import { Settings } from "widgets/settings";
import { SnackBar } from "shared/ui/SnackBar";

type AppLayoutProps = {
	children: ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
	return (
		<>
			{children}
			<SnackBar />
			<Settings />
		</>
	);
};

export default AppLayout;
