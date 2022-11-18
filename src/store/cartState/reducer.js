//REDUX TOOLKIT REDUCER CART
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    setCartList: (state, action) => {
      state.products = action.payload;
    },
    removeItem: (state, action) => {
      state.products.splice(action.payload,1)
    },
    addItem: (state, action) => {
      state.products.push(action.payload);
    },
    resetCart: (state,action) => {
      state.products = [];
    }
  }
})

export const {resetCart, setCartList, removeItem, addItem} = cartSlice.actions;
export default cartSlice.reducer;