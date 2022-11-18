// REDUX TOOLKIT PARA EL LOGIN
import { createSlice } from "@reduxjs/toolkit";

//slice contiene nombre y el action y reducer se combinan en una sola funcion
const orderSlice = createSlice({
  name: 'orderState',
  initialState: {
    seeOrderClick: false,
    product: {
      "name": "ejemplo",
      "id": "ejemplo",
      "description": "ejemplo",
      "price": "ejemplo",
      "imgProduct": "https://reqres.in/img/faces/1-image.jpg"
    }
  },
  reducers: {
    setOrderPage: (state, action) => {
      state.detailsClick = action.payload.detailsClick;
      state.product = action.payload.product;
    }
  }
})

export const {setOrderPage} = orderSlice.actions;
export default orderSlice.reducer;