module.exports = {
  method: "GET",
  path: "/api/recipes",
  config: {
    handler: function (request, reply) {
      this.models.Recipe
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
}