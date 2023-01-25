import { useDispatch } from "react-redux";

import { useAppSelector } from "../../../../hooks";
import { toggleModalInfoOpen } from "../../model/actions";

const useModals = () => {
	const { isModalInfoOpen } = useAppSelector((state) => state.ProfileInformationPanelReducer);
	const dispatch = useDispatch();

	const handleOpenModalInfo = () => {
		dispatch(toggleModalInfoOpen(true));
	};
	const handleCloseModalInfo = () => {
		dispatch(toggleModalInfoOpen(false));
	};

	return { handleCloseModalInfo, handleOpenModalInfo, isModalInfoOpen };
};
export default useModals;
