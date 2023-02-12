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
			<Box mb={3}>
				<TabList onChange={onChangeTabIndex}>
					{children?.map((element) => {
						if (!React.isValidElement(element)) return <></>;
						const elementValue = element.props.value;
						return <Tab key={elementValue} label={elementValue} value={elementValue} />;
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
