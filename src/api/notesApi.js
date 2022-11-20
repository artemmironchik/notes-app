import { BASE_URL } from "../constants"

export const getNotes = (userId) => fetch(
  `${BASE_URL}/notes?userId=${userId}&_sort=createdAt&_order=desc`
).then((r) => {
  if (r.ok) {
    return r.json()
  }
  else throw new Error('there is no such a user')
})

export const getNote = (userId, id) => fetch(
  `${BASE_URL}/notes?userId=${userId}&id=${id}`
).then((r) => {
  if (r.ok) {
    return r.json()
  }
  else throw new Error('there is no such a user')
})

export const deleteNote = (id, userId, callback) => {
  fetch(`${BASE_URL}/notes/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    callback
  )
}

export const saveNote = (note, callback) => {
  fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    body: JSON.stringify(note),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    callback
  ).catch(() => {
    alert('incorrect')
  })
}

export const editNote = (editedNote, note, callback) => {
  fetch(`${BASE_URL}/notes/${note.id}`, {
    method: 'PATCH',
    body: JSON.stringify(editedNote),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(
    callback
  ).catch(() => {
    alert('incorrect')
  })
}