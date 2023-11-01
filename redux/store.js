import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slicers/uploadStateSlice";

export default configureStore({
  reducer: {
    uploadState: uploadReducer,
  },
});
