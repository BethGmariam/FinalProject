
// var express = require('express');
const router = require("express").Router();
var User = require("../../models/User");
// var express = require('express');
// var mongoose = require("mongoose");
// var session = require('express-session');


// mongoose.connect('mongodb://localhost/finalprojectdb').then(() => {
// console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post("/login", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

    User.findOne({email: email}, function(err, user) {
      if (err) {
        console.log(err);
        return res.status(500).send();
      }

      if (!user) {
        return res.status(404).send();
      }

      user.comparePassword(password, function(err, isMatch) {
        if (isMatch && isMatch == true) {
          req.session.user = user;
          return res.status(200).send("loggedin");
        } else {
          return res.status(401).send("unauth");
        }
      });
    })
});


router.get("/logout", function(req, res) {
  req.session.destroy();
  return res.status(200).send();
})


router.get("/dashboard" , function(req,res) {
  if(!req.session.user) {
    return res.status(401).send("You must be logged in to access this");
  }

  return res.status(200).send("Welcome to logged in state");
}) //must be logged in to see thuis apge

router.post("/register", function(req, res) {
  var email = req.body.email;
  var password = req.body.password;

  var newUser = new User();
  newUser.email = email;
  console.log(email);
  newUser.password = password;

  newUser.save(function(err,savedUser) {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    return res.status(200).send();
  })


});

module.exports = router;





////================my test file=======================

// const router = require("express").Router();

// const usersController = require("../../controllers/usersController");

// // Matches with "/api/users"
// router.route("/")
//   .get(usersController.findAll)
//   .post(usersController.create);

//   // Matches with "/api/users/:id"
// router
// .route("/:id")
// .get(usersController.findById)
// .put(usersController.update)
// .delete(usersController.remove);

// router.route("/register")
// .post(usersController.create);

// router.route("/login")
// .get(usersController.findById)


// module.exports = router;
