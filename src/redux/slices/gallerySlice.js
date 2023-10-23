import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchGalleryImages = createAsyncThunk(
  "gallery/fetchGalleryImages",
  async () => {
    const response = await axios.get("http://localhost:5000/gallery");
    return response.data;
  }
);
const gallerySlice = createSlice({
  name: "gallerySlice",
  initialState: {
    gallery: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGalleryImages.fulfilled, (state, action) => {
      state.gallery = action.payload;
    });
    builder.addCase(fetchGalleryImages.pending, (state) => {
      state.gallery = [];
    });
  },
});

export default gallerySlice.reducer;
