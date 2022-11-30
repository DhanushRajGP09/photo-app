import { combineReducers, configureStore } from "@reduxjs/toolkit";

import PhotoReducer from "./Photo/PhotoSlice";

export const store = configureStore({
  reducer: {
    Photos: PhotoReducer,
  },
});
