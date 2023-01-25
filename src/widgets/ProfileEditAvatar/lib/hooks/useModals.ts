import { useState } from "react";

const useModal = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};
	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	return { handleCloseModal, handleOpenModal, isModalOpen };
};

export default useModal;
