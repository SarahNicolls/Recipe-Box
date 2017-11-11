const CREATE_URL = (path = "") => `http://localhost:4040/api/recipes/${path}`;

const getAll = () => {
  return fetch(CREATE_URL())
    .then(res => res.json())
    .catch(err => console.log(err));
};

const getById = id => {
  return fetch(CREATE_URL(id))
    .then(res => res.json())
    .catch(err => console.log(err));
};

const create = (data) => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err));
}

export default {
  getAll,
  getById,
  create
};
