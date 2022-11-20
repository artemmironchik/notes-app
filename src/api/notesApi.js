import { BASE_URL } from "../constants"

export const getNotes = (userId) => fetch(
  `${BASE_URL}/notes?userId=${userId}&_sort=createdAt&_order=desc`
).then((r) => {
  if(r.ok) {
    return r.json()
  }
  else throw new Error('there is no such a user')
})

export const getNote = (userId, id) => fetch(
  `${BASE_URL}/notes?userId=${userId}&id=${id}`
).then((r) => {
  if(r.ok) {
    return r.json()
  }
  else throw new Error('there is no such a user')
})