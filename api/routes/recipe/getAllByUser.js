module.exports = {
  method: "GET",
  path: "/recipes/{userId}",
  config: {
    handler: function (request, reply) {
      let { userId } = request.params;
      this.models.Recipe
        .filter({})
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
}