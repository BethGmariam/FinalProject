const express = require("express"); // backend framework
const mongoose = require("mongoose");//ORM for mongoDB
const bodyParser = require("body-parser");//body of post request
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

// use routes from routes folder index.js
app.use(routes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`server started on PORT: ${PORT}`));

//watson personality analysis  logic
const db = require("./models");
 var params1 = {};
 var userId = '';
 db.User.find()
 .then(function(res) {
   var lastItem = res.length-1;

      params1.textToAnalyze = res[lastItem].personality
      userId = res[lastItem]._id
      console.log(lastItem)
    
     watsonAnalysisFn(params1)
    .then((results) => {
      //console.log(JSON.stringify(results, null, 2))
      
      var tempStorage ={
        Safety: results.consumption_preferences[0].consumption_preferences[1].score,
        Quality: results.consumption_preferences[0].consumption_preferences[2].score,
        stylish: results.consumption_preferences[0].consumption_preferences[3].score,
        comfort: results.consumption_preferences[0].consumption_preferences[4].score,
        brandName: results.consumption_preferences[0].consumption_preferences[5].score,
        useful: results.consumption_preferences[0].consumption_preferences[6].score,
        family: results.consumption_preferences[0].consumption_preferences[9].score,
        spontaneous: results.consumption_preferences[0].consumption_preferences[10].score,
        gym: results.consumption_preferences[1].consumption_preferences[1].score,
        outdoors: results.consumption_preferences[1].consumption_preferences[2].score,
        socialCon: results.consumption_preferences[7].consumption_preferences[0].score,
      };

      console.log(JSON.stringify(tempStorage));


      var myquery = { _id: userId };
      // console.log(userId)
      var newvalues = {$set: {
        Safety: tempStorage.Safety,
        Quality: tempStorage.Quality,
        stylish: tempStorage.stylish,
        comfort: tempStorage.comfort,
        brandName: tempStorage.brandName,
        useful: tempStorage.useful,
        family: tempStorage.family,
        spontaneous: tempStorage.spontaneous,
        gym: tempStorage.gym,
        outdoors: tempStorage.outdoors,
        socialCon: tempStorage.socialCon,
        
        PersonalityAnalysed: true
        } };
      db.User.updateMany(myquery, newvalues, function(err, res) {
      if (err) throw err;
        //db.User.close();
        });
      })
      .catch((error) => console.log(error.message));
     

  });

  
// main watson text analysis function
var watsonAnalysisFn = function(params) {
  return new Promise(function (resolve, reject) {
    // var res = {};

    const PersonalityInsightsV3 =
      require('watson-developer-cloud/personality-insights/v3');
    var personalityInsights = new PersonalityInsightsV3({
      version: '2017-10-13',
      iam_apikey: 'Ubk285AL1s4RoiooAdNATd_0V03e8B8b2e0PZpELryGr',
      url: 'https://gateway.watsonplatform.net/personality-insights/api'
  });

    personalityInsights.profile({
      'text': params.textToAnalyze,
      consumption_preferences: true
    },function(err, res) {
      if (err)
        reject(err);
      else
        resolve(res);
    });
  });
}// end of watson personality analysis  logic
