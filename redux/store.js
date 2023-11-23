import { configureStore } from "@reduxjs/toolkit";
import uploadReducer from "./slicers/uploadStateSlice";
import languageReducer from "./slicers/languageSlice";
import imageReducer from "./slicers/imageSlice";
import banknoteResultReducer from "./slicers/banknoteResult";

export default configureStore({
  reducer: {
    uploadState: uploadReducer,
    language: languageReducer,
    imageStorage: imageReducer,
    banknoteResultStorage: banknoteResultReducer,
  },
});
