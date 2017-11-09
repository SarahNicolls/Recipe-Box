const bcrypt = require("bcrypt-as-promised");

module.exports = db => {
  let User = db.createModel("User", {
    email: db.type.string().required(),
    password: db.type.string().required()
  });

  User.define("generatePassword", function() {
    return bcrypt
      .genSalt(10)
      .then(salt => bcrypt.hash(this.password, salt))
      .then(hash => Object.assign(this, { password: hash }))
      .catch(err => err);
  });

  User.define("comparePassword", function(password) {
    return bcrypt
    .compare(this.password)
    .then(authed => )
  });

  User.pre("save", function(next) {
    User.filter({ email: this.email }).then(result => {
      if (result.length > 0) {
        return next("Email and Password combination is invalid");
      }
    });

    return this.generatePassword()
      .then(() => next())
      .catch(err => {
        console.log(err);
        next(err);
      });
  });

  return User;
};
