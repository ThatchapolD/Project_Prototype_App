import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slicers/uploadStateSlice";
import languageReducer from "./slicers/languageSlice";

export default configureStore({
  reducer: {
    uploadState: uploadReducer,
    language: languageReducer,
  },
});
