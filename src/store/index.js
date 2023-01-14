import { configureStore } from "@reduxjs/toolkit";
import homeState from './homeState/reducer'
import userState from './userState/reducer'

const store = configureStore({
  reducer: {
    homeState,
    userState
  },
})

export default store;
