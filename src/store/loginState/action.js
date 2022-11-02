export const logInState = () => {
  return {
    type: 'INICIAR_SESION',
    payload: {
      logged: true,
      textLog: 'Conectado'
    }
  }
}
export const logOutState = () => {
  return {
    type: 'CERRAR_SESION',
    payload: {
      logged: false,
      textLog: 'Desconectado'
    }
  }
}
