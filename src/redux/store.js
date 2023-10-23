import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/allProductSlice";
import eventsSlice from "./slices/eventsSlice";
import gallerySlice from "./slices/gallerySlice";
export const store = configureStore({
  reducer: {
    events: eventsSlice,
    products: allProductSlice,
    gallery: gallerySlice,
  },
});
