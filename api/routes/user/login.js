module.exports = {
  method: "POST",
  path: "/api/users/login",
  config: {
    handler: function(request, reply) {
      let { email, password } = request.payload;
      this.models.User.filter({ email: email });
    }
  }
};
