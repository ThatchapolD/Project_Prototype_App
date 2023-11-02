import { createSlice } from "@reduxjs/toolkit";

export const languageSlice = createSlice({
  name: "language",
  initialState: {
    languageState: "Thai",
  },
  reducers: {
    selectLanguage: (state, action) => {
      state.languageState = action.payload;
    },
  },
});

export const { selectLanguage } = languageSlice.actions;

export default languageSlice.reducer;
