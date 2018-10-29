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

mongoose.set('useCreateIndex', true);

// app.use(session({secret:“3243242333”, resave: false, saveUninitialized: true}));
//use sessions for tracking logins
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
 
// use routes from routes folder index.js
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on PORT: ${PORT}`));

