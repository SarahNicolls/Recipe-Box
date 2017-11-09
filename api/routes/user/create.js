module.exports = {
  method: "POST",
  path: "/api/users",
  config: {
    handler: function(request, reply) {
      let user = this.models.User(request.payload);

      user
        .save()
        .then(result => reply(result))
        .catch(err => reply(err));
    }
  }
};
