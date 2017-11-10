module.exports = {
  method: "GET",
  path: "/api/users/{id}",
  config: {
    handler: function (request, reply) {
      let { id } = request.params;
      console.log(id)
      this.models.User
        .get(id)
        .then(res => reply(res))
        .catch(err => reply(err));
    }
  }
}