const thinky = require("thinky");
const config = require("../config");

const db = thinky({
  db: config.db.name,
  port: config.db.port,
  host: config.db.host
});

let User = require("./user")(db);
let Recipe = require("./recipe")(db);

User.hasAndBelongsToMany(Recipe, "recipe", "id", "id");

module.exports = {
  User: User,
  Recipe: Recipe
};
