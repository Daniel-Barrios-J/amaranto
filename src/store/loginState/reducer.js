// const initialState = {
//   logged: false,
//   textLog: 'Desconectado'
// }

// const logReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'INICIAR_SESION':
//       return { logged: action.payload.logged, textLog: action.payload.textLog }
//       // return {...state, logged: action.payload,}
//     case 'CERRAR_SESION':
//       return { logged: action.payload.logged, textLog: action.payload.textLog }
//     default: return state;
//   }
// }

// export default logReducer;


// REDUX TOOLKIT PARA EL LOGIN
import { createSlice } from "@reduxjs/toolkit";

//slice contiene nombre y el action y reducer se combinan en una sola funcion
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