
// REDUX PURO

// import { createStore, combineReducers } from 'redux';
// import logReducer from './loginState/reducer';
// import cartReducer from './cartState/reducer';

// const reducers = combineReducers({logReducer, cartReducer});
// const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store;

// REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import cart from '../store/cartState/reducer';
import logState from "./loginState/reducer";
import detailState from './producDetailState/reducer'
import filterState from './filterState/reducer'
import homeState from './homeState/reducer'

const store = configureStore({
  reducer: {
    cart,
    logState,
    detailState,
    filterState,
    homeState
  },
})

export default store;
