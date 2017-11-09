module.exports = db => {
  let User = db.createModel("User", {
    email: db.type.string().required(),
    password: db.type.string().required()
  });
  return User;
};
