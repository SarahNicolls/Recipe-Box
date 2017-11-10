module.exports = {
  method: "GET",
  path: "/api/users/{userId}/recipes",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      let userId = request.params.userId;

      this.models.User
        .get(userId)
        .getJoin({ recipes: true })
        .then(user => reply(user))
        .catch(err => {
          console.log(err);
          reply(err);
        });
    }
  }
};
