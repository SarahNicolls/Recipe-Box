const CREATE_URL = (path = "") =>
  `https://ec2-54-244-61-151.us-west-2.compute.amazonaws.com/${path}`;

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

export default {
  login,
  signup,
  create,
  getAll,
  getById,
  getAllByUser,
  update,
  remove
};
