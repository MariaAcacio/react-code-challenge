import { useSelector } from "react-redux";
import { StoreType } from "../modules/framework-exercise/store/store";

export const useSelectUser = () =>
  useSelector((state: StoreType) => state.user);
