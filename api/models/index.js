const thinky = require("thinky");

const db = thinky({
  db: "RecipeBox"
});

let User = require("./user")(db);

module.exports = {
  User: User
};
