import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

const totalResume = (order) => {
  let priceArray = order.map((product)=>product.price)
  if (priceArray.length === 0) {
    return '0'
   }
  let totalTemp = priceArray.reduce((a, b)=>a + b)
  return totalTemp
}

const dateOfPurchase = () => {
  const date = new Date()
  return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
}

const ordersSlice = createSlice({
  name: 'ordersState',
  initialState: {
    orders: []
  },
  reducers: {
    setOrders: (state, action) => {
      // state.orders = action.payload
      state.orders.push({
        orderId: uuidv4(),
        date: dateOfPurchase(),
        products: action.payload,
        totalPurchase: totalResume(action.payload)
      })
    }
  }
})

export const {setOrders} = ordersSlice.actions;
export default ordersSlice.reducer;