import { ChangeEvent, useEffect, useState } from "react";

type UseFileReaderParams = {
  defaultPictureUrl: string;
};

type UseFileReader = (data: UseFileReaderParams) => {
  handleReadPicture: (e: ChangeEvent<HTMLInputElement>) => void;
  picturePreviewUrl: string | undefined;
  file: File | null;
  resetPicturePreviewUrlToDefault: () => void;
};

const useFileReader: UseFileReader = ({ defaultPictureUrl }) => {
  const [picturePreviewUrl, setPicturePreviewUrl] = useState<
    string | undefined
  >(defaultPictureUrl);
  const [file, setFile] = useState<File | null>(null);

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

  const resetPicturePreviewUrlToDefault = () => {
    console.log("here");
    setPicturePreviewUrl(defaultPictureUrl);
  };

  useEffect(() => {
    setPicturePreviewUrl(defaultPictureUrl);
  }, [defaultPictureUrl]);

  return {
    handleReadPicture,
    picturePreviewUrl,
    file,
    resetPicturePreviewUrlToDefault,
  };
};

export default useFileReader;
