import { createSlice } from "@reduxjs/toolkit";

const infoSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "rickroll420",
      email: "rickroll420@gmail.com",
      name: "rick",
      surname: "astley",
      age: 420,
      workplace: "never gonna give you up",
      position: "never gonna let you down",
    },
  },
  reducers: {
    editInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { editInfo } = infoSlice.actions;

export const selectInfo = (state) => state.user.user;

export default infoSlice.reducer;
