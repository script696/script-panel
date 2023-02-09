import { TypedUseSelectorHook, useSelector } from "react-redux";

import { IRootState } from "../../../app/store/reducers";

const useAppSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useAppSelector;
