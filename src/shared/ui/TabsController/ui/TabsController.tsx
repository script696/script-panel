import React, { ReactNode } from "react";
import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

import useTabsController from "../lib/hooks/useTabsController";

type TabsControllerProps = {
	children: Array<ReactNode>;
	initialTabIndex: string;
};

const TabsController = ({ children, initialTabIndex }: TabsControllerProps) => {
	const { currentTabIndex, handleChangeTabIndex: onChangeTabIndex } = useTabsController(initialTabIndex);

	return (
		<TabContext value={currentTabIndex}>
			<Box mb={2}>
				<TabList onChange={onChangeTabIndex} textColor="inherit">
					{children?.map((element) => {
						if (!React.isValidElement(element)) return <></>;
						const elementValue = element.props.value;
						return (
							<Tab
								key={elementValue}
								label={elementValue}
								value={elementValue}
								className="color_contrastText"
								sx={{ minHeight: 0, textTransform: "none" }}
							/>
						);
					})}
				</TabList>
			</Box>
			<Box flexGrow={1}>
				{children?.map((element) => {
					if (!React.isValidElement(element)) return <></>;
					const elementValue = element.props.value;
					return (
						<TabPanel key={elementValue} value={elementValue}>
							{element}
						</TabPanel>
					);
				})}
			</Box>
		</TabContext>
	);
};

export default TabsController;
