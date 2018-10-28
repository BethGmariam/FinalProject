
const mongoose = require("mongoose");
const mLabMongoURI = require("../config/keys").mLabMongoURI;//mongoDb connection key to mLab
const db = require("../models");


//add test data to the model

mongoose.connect(mLabMongoURI);

  const userSeed ={
    first_name: "Zachary",
    last_name:"youKnowIt",
    email:"Zackdeveloper@gmail.com",
    password:"testingbcrypt10", 
    username:"testing10",
    date: new Date(Date.now())
  }

  console.log("before insert"+ userSeed);

  db.User
  .create(userSeed,function(err, userData){
      console.log(userData)
      })


  
  // db.User
  // .deleteMany()
  // .then(() => db.User.create(userSeed,function(err, userData){
  //   console.log(userData)
  //   })
  // )
 






  