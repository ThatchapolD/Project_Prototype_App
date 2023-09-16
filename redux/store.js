import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slicers/imageSlice";
import uploadReducer from "./slicers/uploadStateSlice";

export default configureStore({
  reducer: {
    imageSelector: imageReducer,
    uploadState: uploadReducer,
  },
});
