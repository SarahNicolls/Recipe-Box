module.exports = {
  method: "GET",
  path: "/api/users",
  config: {
    handler: function(request, reply) {
      this.models.User
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
