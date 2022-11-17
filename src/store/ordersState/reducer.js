import { createSlice } from "@reduxjs/toolkit";

const ordersSlice = createSlice({
  name: 'ordersState',
  initialState: {
    orders: [
      {
        orderId: 'exampleId',
        date: 'example date',
        products: [],
        totalPurchase: '00'
      }
    ]
  },
  reducers: {
    setOrders: (state, action) => {
      state.orders = action.payload
    }
  }
})

export const {setOrders} = ordersSlice.actions;
export default ordersSlice.reducer;