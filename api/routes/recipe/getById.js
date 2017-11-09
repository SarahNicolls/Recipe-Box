module.exports = {
  method: "GET",
  path: "/api/recipes/{id}",
  config: {
    handler: function (request, reply) {
      let { id } = request.params;
      this.models.Recipe
        .get(id)
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
}