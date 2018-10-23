const express = require("express"); // backend framework
const mongoose = require("mongoose");//ORM for mongoDB
const bodyParser = require("body-Parser");//body of post request
const mLabMongoURI = require("./config/keys").mLabMongoURI;//mongoDb connection key to mLab
const routes = require("./routes");// get routes

const app = express();

app.use(bodyParser.json());

//connect to mongo/mongoose

mongoose
.connect(mLabMongoURI)
.then(()=>console.log("MongoDb connected...")) // once key is added to config/folder keys.js file, server should connect to mLab finalprojectdb
.catch(err => console.log(err));

// const db = require("./models");

// app.get('/api/test',function(req,res){
//     db.Item.find({}).then(dbModel => res.json(dbModel))
   
// })


// use routes from routes folder
app.use(routes);


const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`server started on PORT: ${PORT}`));

