module.exports = {
  method: "GET",
  path: "/api/recipes",
  config: {
    auth: { mode: "optional" },
    handler: function (request, reply) {
      this.models.Recipe
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
};
