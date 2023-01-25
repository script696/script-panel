import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LockIcon from "@mui/icons-material/Lock";

import { ProfileTabsData } from "../types/types";

export const PROFILE_TABS_DATA: Array<ProfileTabsData> = [
	{ icon: AccountBoxIcon, slideId: 0, title: "Personal information" },
	{ icon: LockIcon, slideId: 1, title: "Security settings" },
];
