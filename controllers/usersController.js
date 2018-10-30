// const db = require("../models");

// // Defining methods for the UsersController
// module.exports = {
//   findAll: function(req, res) {
//     db.User
//       .find(req.query)
//       .sort({ date: -1 })
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   findById: function(req, res) {
//     db.User
//       .findById(req.params.id)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   create: function(req, res) {
//     db.User
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   update: function(req, res) {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.User
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }
// };

const db = require("../models");

module.exports = {

  loginFn: function(req,res){
    db.User.findOne({email: req.body.email}, function(err, user) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      if (!user) {
        return res.status(404).send();
        console.log("user not found")
      }

      user.comparePassword(req.body.password, function(err, isMatch) {
        if (isMatch && isMatch == true) {
          req.session.user = user;
          return res.status(200).send("loggedin");
        } else {
          return res.status(401).send("unauth");
        }
      });
    })
  }


}




