import { createSlice } from "@reduxjs/toolkit";

export const uploadStateSlice = createSlice({
  name: "uploadState",
  initialState: {
    status: null,
  },
  reducers: {
    updating: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { updating } = uploadStateSlice.actions;

export default uploadStateSlice.reducer;
