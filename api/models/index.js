const thinky = require("thinky");

const db = thinky({
  db: "RecipeBox"
});

let User = require("./user")(db);
let Recipe = require("./recipe")(db);

module.exports = {
  User: User,
  Recipe: Recipe
};
