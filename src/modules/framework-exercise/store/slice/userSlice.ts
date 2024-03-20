import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { StoreType } from "../store";
import { UserListType } from "src/types/docTypes";

type UserSliceType = {
  name: string;
  id: number;
  userList: UserListType;
};

const initialState: UserSliceType = {
  name: "",
  id: 0,
  userList: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.id = payload.id;
      const isThere = state.userList[payload.name];
      if (payload.name !== "" && !isThere) {
        state.userList[payload.name] = payload;
      }
    },
    setUserList: (state, { payload }) => {
      state.userList = payload;
    },
  },
});

export const { setUser, setUserList } = userSlice.actions;
export default userSlice.reducer;

export const useSelectUser = () =>
  useSelector((state: StoreType) => state.user);
