module.exports = {
  method: "GET",
  path: "/api/users",
  config: {
    auth: { mode: "optional" },
    handler: function(request, reply) {
      this.models.User
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
