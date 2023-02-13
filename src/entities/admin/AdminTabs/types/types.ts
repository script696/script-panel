import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

type ProfileTabsList = "Personal information" | "Security settings";

export type ProfileTabsData = {
	icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & { muiName: string };
	title: ProfileTabsList;
	slideId: number;
};
