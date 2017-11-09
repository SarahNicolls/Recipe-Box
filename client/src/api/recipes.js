const CREATE_URL = (path = "") => `http://localhost:4040/api/recipes/${path}`;

const getAll = () => {
  return fetch(CREATE_URL())
    .then(res => res.json())
    .catch(err => console.log(err));
}

const getById = (id) => {
  return fetch(CREATE_URL(id))
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default {
  getAll,
  getById
}