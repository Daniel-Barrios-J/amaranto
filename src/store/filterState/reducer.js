import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filterState',
  initialState: {
    filter: 'recents'
  },
  reducers: {
    setFilterState: (state, action) => {
      state.filter = action.payload;
    },
  }
})

export const {setFilterState} = filterSlice.actions;
export default filterSlice.reducer;
