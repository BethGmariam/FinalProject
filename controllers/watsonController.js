
//watson personality analysis  logic
const db = require("../models");



module.exports = {
    
getWatson: function(req,res){

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





}
}