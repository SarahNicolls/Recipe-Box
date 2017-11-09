module.exports = {
  method: "POST",
  path: "/api/recipes",
  config: {
    handler: function (request, reply) {
      let recipe = this.models.Recipe(request.payload);
      recipe
        .save()
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
}