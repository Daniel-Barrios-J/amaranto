import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';
import { handleUserDataFirebase } from "../../firebase";

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

const userSlice = createSlice({
  name: 'userState',
  initialState: {
    user: {
      name: '',
      email: '',
      phone: '',
      uid: '',
      cart: [],
      orders: []
    }
  },
  reducers: {
    setUserState: (state, action) => {
      state.user = action.payload
    },
    setCartList: (state, action) => {
      state.user.cart = action.payload;
    },
    removeItem: (state, action) => {
      state.user.cart.splice(action.payload,1);
      handleUserDataFirebase(state.user);
    },
    addItem: (state, action) => {
      state.user.cart.push(action.payload);
      handleUserDataFirebase(state.user);
    },
    resetCart: (state,action) => {
      state.user.cart = [];
      handleUserDataFirebase(state.user);
    },
    setNewOrder: (state, action) => {
      // state.orders = action.payload
      state.user.orders.unshift({
        orderId: uuidv4(),
        date: dateOfPurchase(),
        products: action.payload,
        totalPurchase: totalResume(action.payload)
        
      });
      handleUserDataFirebase(state.user);
    }
    ,
    resetUserState: (state, action) => {
      if(action.payload === true) {
        state.user = {
          name: '',
          email: '',
          phone: '',
          uid: '',
          cart: [],
          orders: []
        }
      }
    }
  }
})

export const {resetUserState, setCartList, setNewOrder, setUserState, removeItem, resetCart, addItem} = userSlice.actions;
export default userSlice.reducer;