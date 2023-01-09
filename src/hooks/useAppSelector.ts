import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../store/reducers";

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useAppSelector;
