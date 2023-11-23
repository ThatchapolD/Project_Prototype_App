import { createSlice } from "@reduxjs/toolkit";

export const banknoteResultSlice = createSlice({
  name: "banknoteInfo",
  initialState: {
    banknoteID: null,
    Serial_Number: null,
    MF_Sig: null,
    BOT_Sig: null,
  },
  reducers: {
    resultID: (state, action) => {
      state.banknoteID = action.payload;
    },

    resultNum: (state, action) => {
      state.Serial_Number = action.payload;
    },

    resultMFSig: (state, action) => {
      state.MF_Sig = action.payload;
    },

    resultBOTSig: (state, action) => {
      state.BOT_Sig = action.payload;
    },
  },
});

export const { resultID, resultNum, resultMFSig, resultBOTSig } =
  banknoteResultSlice.actions;

export default banknoteResultSlice.reducer;
