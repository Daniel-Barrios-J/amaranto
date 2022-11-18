// REDUX TOOLKIT PARA EL LOGIN
import { createSlice } from "@reduxjs/toolkit";

//slice contiene nombre y el action y reducer se combinan en una sola funcion
const orderSlice = createSlice({
  name: 'orderState',
  initialState: {
    order: {
      orderId: 'id ejemplo',
      date: 'example date',
      products: [],
      totalPurchase: 'total example'
    }
     
  },
  reducers: {
    setOrderPage: (state, action) => {
      state.order = action.payload;
    }
  }
})

export const {setOrderPage} = orderSlice.actions;
export default orderSlice.reducer;