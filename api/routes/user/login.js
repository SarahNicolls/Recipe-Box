module.exports = {
  method: "POST",
  path: "/api/users/login",
  config: {
    auth: {
      mode: "optional"
    },
    handler: function(request, reply) {
      let { email, password } = request.payload;
      console.log(email, password);
      this.models.User
        .filter({ email: email })
        .then(users => {
          if (users.length === 0) {
            throw "email and password combo is invalid";
          }
          let [user] = users;
          return user.comparePassword(password);
        })
        .then(user => {
          console.log(user);
          if (!user) {
            throw "email and password combo is invalid";
          }
          delete user.password;

          return user.generateJWT();
        })
        .then(token => reply(token))
        .catch(err => reply(err));
    }
  }
};
