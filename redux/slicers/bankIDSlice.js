import { createSlice } from "@reduxjs/toolkit";

export const bankIDSlice = createSlice({
  name: "banknotesID",
  initialState: {
    bankID: null,
  },
  reducers: {
    resultID: (state, action) => {
      state.bankID = action.payload;
    },
  },
});

export const { resultID } = bankIDSlice.actions;

export default bankIDSlice.reducer;
