import { ChangeEvent, useEffect, useState } from "react";

type UseFileReaderParams = {
	defaultPictureUrl: string;
};

type UseFileReader = (data: UseFileReaderParams) => {
	handleReadPicture: (e: ChangeEvent<HTMLInputElement>) => void;
	picturePreviewUrl: string | undefined;
	file: File | null;
};

const useFileReader: UseFileReader = ({ defaultPictureUrl }) => {
	const [picturePreviewUrl, setPicturePreviewUrl] = useState<string | undefined>(defaultPictureUrl);
	const [file, setFile] = useState<File | null>(null);
	useEffect(() => {
		console.log(defaultPictureUrl);
	}, [defaultPictureUrl]);
	const handleReadPicture = (e: ChangeEvent<HTMLInputElement>) => {
		const fileReader = new FileReader();

		if (!e.target.files) return;

		const file = e.target.files[0];

		fileReader.readAsDataURL(e.target.files[0]);

		fileReader.onload = () => {
			if (fileReader.readyState === 2) {
				setFile(file);
				setPicturePreviewUrl(fileReader.result as string);
			}
		};
	};

	useEffect(() => {
		setPicturePreviewUrl(defaultPictureUrl);
	}, [defaultPictureUrl]);

	return {
		file,
		handleReadPicture,
		picturePreviewUrl,
	};
};

export default useFileReader;
