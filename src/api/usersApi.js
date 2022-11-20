import { BASE_URL } from '../constants';

export const getUsers = (user, callback) => {
  fetch(`${BASE_URL}/users`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(callback)
    .catch(() => {
      alert('incorrect');
    });
};
