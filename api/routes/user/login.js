module.exports = {
  method: "POST",
  path: "/api/users/login",
  config: {
    auth: {
      mode: "optional"
    },
    handler: function(request, reply) {
      reply("not implemented");
    }
  }
};
