import { createSlice } from "@reduxjs/toolkit";

export const imageSlice = createSlice({
  name: "image",
  initialState: {
    imageUri: null,
  },
  reducers: {
    selecting: (state, action) => {
      state.imageUri = action.payload;
    },
  },
});

export const { selecting } = imageSlice.actions;

export default imageSlice.reducer;
