import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: 'logState',
  initialState: {
    logged: false,
    textLog: 'Desconectado'
  },
  reducers: {
    setLog: (state, action) => {
      state.logged = action.payload
      state.textLog = action.payload ? 'Conectado' : 'Desconectado'
    }
  }
})

export const {setLog} = loginSlice.actions;
export default loginSlice.reducer;