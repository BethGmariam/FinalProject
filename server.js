const express = require("express"); // backend framework
const mongoose = require("mongoose");//ORM for mongoDB
const bodyParser = require("body-parser");//body of post request
const mLabMongoURI = require("./config/keys").mLabMongoURI;//mongoDb connection key to mLab
const routes = require("./routes");// get routes
const path = require("path")

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

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

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
      console.log(JSON.stringify(results, null, 2))
      
      var tempStorage ={
        Openness:results.personality[0].percentile,
        Conscientiousness:results.personality[1].percentile,
        Extraversion:results.personality[2].percentile,
        Agreeableness:results.personality[3].percentile,
        EmotionalRange:results.personality[4].percentile
  
      };


      var myquery = { _id: userId };
      // console.log(userId)
      var newvalues = {$set: {
        Openness: tempStorage.Openness,
        Conscientiousness: tempStorage.Conscientiousness,
        Extraversion: tempStorage.Extraversion,
        Agreeableness: tempStorage.Agreeableness,
        EmotionalRange: tempStorage.EmotionalRange,
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

    personalityInsights.profile({'text': params.textToAnalyze},function(err, res) {
      if (err)
        reject(err);
      else
        resolve(res);
    });
  });
}// end of watson personality analysis  logic
