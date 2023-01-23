import { useEffect, useState } from "react";

import ProfileInfo from "../components/ProfileInfo";
import ProfileSecurity from "../components/ProfileSecurity";

type CurrentTabSlide = "Personal information" | "Security settings";

const useProfileTabs = ({ profileInfoData }: any) => {
	const [currentTabSlide, setCurrentTabSlide] = useState<CurrentTabSlide>("Personal information");

	const handleTabClick = (title: CurrentTabSlide) => {
		setCurrentTabSlide(title);
	};

	const getCurrentTabSlideComponent = () => {
		switch (currentTabSlide) {
			case "Personal information":
				return <ProfileInfo profileInfoData={profileInfoData} />;
			case "Security settings":
				return <ProfileSecurity />;
		}
	};

	useEffect(() => {}, [currentTabSlide]);

	return { currentTabSlide, getCurrentTabSlideComponent, handleTabClick };
};

export default useProfileTabs;
