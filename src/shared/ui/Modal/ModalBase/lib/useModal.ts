import { useState } from "react";

type UseModalResult = {
	isModalOpen: boolean;
	handleOpenModal: () => void;
	handleCloseModal: () => void;
	toggleModal: () => void;
};

const useModal = (): UseModalResult => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleOpenModal = () => {
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
	};

	const toggleModal = () => {
		setIsModalOpen((prev) => !prev);
	};

	return { handleCloseModal, handleOpenModal, isModalOpen, toggleModal };
};
export default useModal;
