import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: 'homeState',
  initialState: {
    // dataHome: data,
    dataHome: {
      "page": 2,
      "per_page": 6,
      "total": 12,
      "total_pages": 2,
      "data": [
      {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },]
    },
  },
  reducers: {
    setDataHome: (state, action) => {
      state.dataHome = action.payload;
    }
  }
})

export const { setDataHome } = homeSlice.actions;
export default homeSlice.reducer;