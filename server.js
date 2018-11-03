const express = require("express"); // backend framework
const mongoose = require("mongoose");//ORM for mongoDB
const bodyParser = require("body-Parser");//body of post request
const mLabMongoURI = require("./config/keys").mLabMongoURI;//mongoDb connection key to mLab
const routes = require("./routes");// get routes

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//connect to mongo/mongoose
mongoose
.connect(process.env.MONGODB_URI || mLabMongoURI, { useNewUrlParser: true })
.then(()=>console.log("MongoDb connected...")) // once key is added to config folder keys.js file, server should connect to mLab finalprojectdb
.catch(err => console.log(err));

mongoose.set('useCreateIndex', true);// add for DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.

// for monitoring users
const session = require('express-session');
// const MongoStore = require('connect-mongo')(session);
// const db = mongoose.connection;
app.use(session({
    secret: 'work hard',
    resave: false,
    saveUninitialized: true,
    // store: new MongoStore({
      // mongooseConnection: db
    // })
  }));

// for login system all in server.js
var db = require("./models");

  app.post("/login", function(req, res) {
    var email = req.body.email;
    var password = req.body.password;
  
      db.User.findOne({email: email}, function(err, user) {
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
  
  
  app.get("/logout", function(req, res) {
    req.session.destroy();
    return res.status(200).send();
  })
  
  
  app.get("/dashboard" , function(req,res) {
    if(!req.session.user) {
      return res.status(401).send("You must be logged in to access this");
    }
  
    return res.status(200).send("Welcome to logged in state");
  }) //must be logged in to see thuis apge
  
  app.post("/registration", function(req, res) {
    db.User
    .create(req.body)
    .then(userData => {
      console.log(userData)
      return res.status(200).send()
    })
    .catch(err => res.status(422).json(err));
  });// end of login/registeration.

// use routes from routes folder index.js
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on PORT: ${PORT}`));

