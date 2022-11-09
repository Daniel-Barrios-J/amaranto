// const url = 'https://reqres.in/api/users?page=2'

export const getListUsers = (url = 'https://reqres.in/api/users?page=1') => {
  return fetch(url).then(res=>res.json())
}