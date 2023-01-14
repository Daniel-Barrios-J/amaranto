import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'homeState',
  initialState: {
    filter: 'recents',
    products: [],
    detailProduct: {
      detailsClick: false,
      product: {
        "name": "ejemplo",
        "id": "ejemplo",
        "description": "ejemplo",
        "price": "ejemplo",
        "images": {
          "img1": ""
        }
      }
    },
  },
  reducers: {
    setFilterState: (state, action) => {
      state.filter = action.payload;
    },
    setDetails: (state, action) => {
      state.detailProduct = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    }
  }
})

export const {setFilterState, setDetails, setProducts} = homeSlice.actions;
export default homeSlice.reducer;

