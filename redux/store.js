import { configureStore } from "@reduxjs/toolkit";
import imageReducer from "./slicers/imageSlice";
import uploadReducer from "./slicers/uploadStateSlice";
import bankIDReducer from "./slicers/bankIDSlice";

export default configureStore({
  reducer: {
    imageSelector: imageReducer,
    uploadState: uploadReducer,
    banknotesID: bankIDReducer,
  },
});
