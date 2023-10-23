import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(`http://localhost:5000/products`);
    return response.data;
  }
);

const allProductSlice = createSlice({
  name: "allProduct",
  initialState: {
    products: [],
    addedProducts: [],
    payment: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.addedProducts.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) existingProduct.cartQuantity += 1;
      else state.addedProducts.push({ ...action.payload, cartQuantity: 1 });
    },
    removeFromCart: (state, action) => {
      state.addedProducts = state.addedProducts.filter(
        (product) => product._id !== action.payload._id
      );
    },
    clearTheCart: (state) => {
      state.addedProducts = [];
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.addedProducts.find(
        (product) => product._id === action.payload._id
      );
      existingProduct.cartQuantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.addedProducts.find(
        (product) => product._id === action.payload._id
      );
      if (existingProduct.cartQuantity === 1) return;
      existingProduct.cartQuantity -= 1;
    },
    setPayment: (state, action) => {
      state.payment.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.pending, (state) => {
      state.products = [];
    });
  },
});
export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearTheCart,
  setPayment,
} = allProductSlice.actions;
export default allProductSlice.reducer;
