// REDUCER CON PRODUCTOS POR DEFECTO

// import products from '../../products.json'

// const initialState = {
//   products: products
// }

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'AGREGAR_AL_CARRITO':
//       return { 
//         products: state.products.push(action.payload)
//       }
//       // return {...state, logged: action.payload,}
//     case 'ELIMINAR_DEL_CARRITO':
//       state.products.splice(action.payload.index, 1)
//       return {...state,
//         products: state.products
//       }
//     default: return state;
//   }
// }

// export default cartReducer;

// REDUCER CON USUSARIOS POR DEFECTP
// import usuarios from '../../usuarios.json'

// const initialState = {
//   usuarios: usuarios
// }

// const cartReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'AGREGAR_AL_CARRITO':
//       return { 
//         usuarios: state.usuarios.push(action.payload)
//       }
//       // return {...state, logged: action.payload,}
//     case 'ELIMINAR_DEL_CARRITO':
//       state.usuarios.splice(action.payload.index, 1)
//       return {...state,
//         usuarios: state.usuarios
//       }
//     default: return state;
//   }
// }

// export default cartReducer;

//REDUX TOOLKIT REDUCER CART
import { createSlice } from "@reduxjs/toolkit";
// import usuarios from '../../usuarios.json'
// import axios from "axios";

//slice contiene nombre y el action y reducer se combinan en una sola funcion
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    usuarios: []
  },
  reducers: {
    setCartList: (state, action) => {
      state.usuarios = action.payload;
    },
    removeItem: (state, action) => {
      state.usuarios.splice(action.payload,1)
    },
    addItem: (state, action) => {
      state.usuarios.push(action.payload);
    }
  }
})

export const {setCartList, removeItem, addItem} = cartSlice.actions;
export default cartSlice.reducer;