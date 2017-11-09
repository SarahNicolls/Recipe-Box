const hapi = require("hapi");
const server = new hapi.Server();
const api = require("./api");
const hapiAuthJwt = require("hapi-auth-jwt2");

server.connection({
  host: "localhost",
  port: 4040,
  routes: {
    cors: true
  },
  router: {
    stripTrailingSlash: true
  }
});

server
  .register([
    hapiAuthJwt,
    {
      register: api
    }
  ])
  .then(() => {
    server
      .start()
      .then(() => console.log(`Server started at ${server.info.uri}`))
      .catch(err => console.log(err));
  });
