module.exports = {
  method: "POST",
  path: "/api/users/{userId}/recipes",
  config: {
    handler: function (request, reply) {
      let userId = request.params.userId;
      let recipe = request.payload;

      this.models.User
        .get(userId)
        .then(user => user.addRelation("recipes", recipe))
        .then(user => reply(user))
        .catch(err => {
          console.log(err);
          reply(err);
        });
    }
  }
};
