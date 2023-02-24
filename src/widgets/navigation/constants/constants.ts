import HomeIcon from "@mui/icons-material/Home";

import Diversity3Icon from "@mui/icons-material/Diversity3";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

import { PROTECTED_ROUTES } from "../../../shared/lib/constants/routes";

const HOME_NAV_ITEM = {
	icon: HomeIcon,
	link: PROTECTED_ROUTES.PRODUCTS,
	title: "Products",
};
const USERS_NAV_ITEM = {
	icon: Diversity3Icon,
	link: PROTECTED_ROUTES.USERS,
	title: "Users",
};
const PROJECTS_NAV_ITEM = {
	icon: AccountTreeIcon,
	link: PROTECTED_ROUTES.PROJECTS,
	title: "Projects",
};

export const NAV_ITEMS = [HOME_NAV_ITEM, USERS_NAV_ITEM, PROJECTS_NAV_ITEM];
