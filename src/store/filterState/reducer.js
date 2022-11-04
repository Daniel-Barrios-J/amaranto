import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filterState',
  initialState: {
    filter: 'recents'
  },
  reducers: {
    setRecents: (state, action) => {
      state.filter = action.payload;
    },
    setLowerPrice: (state, action) => {
      state.filter = action.payload;
    },
    setHigherPrice: (state, action) => {
      state.filter = action.payload;
    },
    setPopulars: (state, action) => {
      state.filter = action.payload;
    },
  }
})

export const {setHigherPrice, setLowerPrice, setPopulars, setRecents} = filterSlice.actions;
export default filterSlice.reducer;
