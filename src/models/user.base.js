export const getUserBase = (name, email, phone, uid) => {
  const user = {
    name,
    email,
    phone,
    uid,
    cart: [],
    orders: [],
  }
  return user;
}