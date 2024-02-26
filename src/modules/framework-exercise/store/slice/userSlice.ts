import { createSlice } from "@reduxjs/toolkit";

type UserSliceType = {
  name: string;
  id: number;
  userList: { name: string; id: number }[];
};

const initialState: UserSliceType = {
  name: "",
  id: 0,
  userList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.name = payload.name;
      state.id = payload.id;
      const isThere = state.userList.find((item) => item.name === payload.name);
      if (payload.name !== "" && !isThere) {
        state.userList.push(payload);
      }
    },
    setUserList: (state, { payload }) => {
      state.userList = payload;
    },
  },
});

export const { setUser, setUserList } = userSlice.actions;
export default userSlice.reducer;
