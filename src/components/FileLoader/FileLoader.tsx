import { ChangeEvent, ReactNode } from "react";

type FileLoaderProps = {
  id: string | number;
  children: ReactNode;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const FileLoader = ({ id, children, handleInputChange }: FileLoaderProps) => {
  const stringId = String(id);

  return (
    <input
      type="file"
      id={stringId}
      name={stringId}
      onChange={handleInputChange}
    >
      {children}
    </input>
  );
};

export default FileLoader;
