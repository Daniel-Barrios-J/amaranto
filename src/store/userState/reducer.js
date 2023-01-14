import { createSlice } from "@reduxjs/toolkit";

import { v4 as uuidv4 } from 'uuid';
// import { manageUserData } from '../../services/manageUserData'

// resume order
const totalResume = (order) => {
  let priceArray = order.map((product)=>product.price)
  if (priceArray.length === 0) {
    return '0'
   }
  let totalTemp = priceArray.reduce((a, b)=>a + b)
  return totalTemp
}

// date order
const dateOfPurchase = () => {
  const date = new Date()
  return `${date.getDate()} / ${date.getMonth()} / ${date.getFullYear()}`
}

const userSlice = createSlice({
  name: 'userState',
  initialState: {
    user: {
      logged: false,
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
    addItem: (state, action) => {
      state.user.cart.push(action.payload);
      let data = state.user;
      console.log(data);
      // manageUserData(dataFirebase)
    },
    removeItem: (state, action) => {
      state.user.cart.splice(action.payload,1);
      //TODO remove to cart in firebase 
    },
    resetCart: (state,action) => {
      state.user.cart = [];
      //TODO reset cart in firebase 
    },
    setNewOrder: (state, action) => {
      state.user.orders.unshift({
        orderId: uuidv4(),
        date: dateOfPurchase(),
        products: action.payload,
        totalPurchase: totalResume(action.payload)  
      });
      // TODO add new order in firebase
    },
    resetUserState: (state, action) => {
      if(action.payload === true) {
        state.user = {
          logged: false,
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