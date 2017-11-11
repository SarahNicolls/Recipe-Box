const CREATE_URL = (path = "") => `http://localhost:4040/api/users/${path}`;

const signup = credentials => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const login = credentials => {
  return fetch(CREATE_URL("login"), {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const create = data => {
  return fetch(CREATE_URL(), {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getAll = () => {
  return fetch(CREATE_URL())
    .then(response => response.json())
    .catch(err => err);
};

const getUserByEmail = email => {
  return fetch(CREATE_URL(email), {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}

const getAllByUser = id => {
  return fetch(CREATE_URL(id), {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getById = id => {
  return fetch(CREATE_URL(id), {
    method: "GET",
    body: JSON.stringify(),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const getRecipesByUser = (id) => {
  return fetch(CREATE_URL(`${id}/recipes`), {
    method: "GET",
  })
    .then(response => response.json())
    .catch(err => err);
}

const update = (data, id) => {
  return fetch(CREATE_URL(id), {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
    .catch(err => err);
};

const remove = id => {
  return fetch(CREATE_URL(id), {
    method: "DELETE"
  })
    .then(response => response.json())
    .catch(err => err);
};

const addRecipeToUser = (id, data) => {
  console.log(JSON.stringify({ data }))
  return fetch(CREATE_URL(`${id}/recipes`), {
    method: "POST",
    body: JSON.stringify({ id: data }),
    headers: {
      "Content-Type": "application/json",
      Authorization: localStorage.getItem("token")
    }
  })
    .then(response => response.json())
    .catch(err => err);
}

export default {
  login,
  signup,
  create,
  getAll,
  getById,
  getAllByUser,
  getRecipesByUser,
  getUserByEmail,
  update,
  remove,
  addRecipeToUser
};
