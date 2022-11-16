// REDUX TOOLKIT PARA EL LOGIN
import { createSlice } from "@reduxjs/toolkit";

//slice contiene nombre y el action y reducer se combinan en una sola funcion
const detailSlice = createSlice({
  name: 'detailState',
  initialState: {
    detailsClick: false,
    product: {
      "name": "ejemplo",
      "id": "ejemplo",
      "description": "ejemplo",
      "price": "ejemplo",
      "imgProduct": "https://reqres.in/img/faces/1-image.jpg"
    }
  },
  reducers: {
    setDetails: (state, action) => {
      state.detailsClick = action.payload.detailsClick;
      state.product = action.payload.product;
    }
  }
})

export const {setDetails} = detailSlice.actions;
export default detailSlice.reducer;