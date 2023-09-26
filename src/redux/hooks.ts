import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./store";

export const useAppDispatch = () => useDispatch<any>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
