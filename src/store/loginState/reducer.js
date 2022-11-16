import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'logState',
  initialState: {
    logged: false,
    textLog: 'Desconectado'
  },
  reducers: {
    setLog: (state, action) => {
      state.logged = action.payload.logged
      state.textLog = action.payload.textLog
    }
  }
})

export const {setLog} = loginSlice.actions;
export default loginSlice.reducer;