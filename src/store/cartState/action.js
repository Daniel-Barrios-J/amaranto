export const addToCart = (product) => {
  return {
    type: 'AGREGAR_AL_CARRITO',
    payload: product
  }
}

export const removeToCart = (index) => {
  return {
    type: 'ELIMINAR_DEL_CARRITO',
    payload: {
      index
    }
  }
}