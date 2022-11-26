import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'homeState',
  initialState: {
    dataHome: []
  },
  reducers: {
    setDataHome: (state, action) => {
      state.dataHome = action.payload;
    }
  }
})

export const { setDataHome } = homeSlice.actions;
export default homeSlice.reducer;