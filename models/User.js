const mongoose = require('mongoose');
require('mongoose-type-email');// to validate email address
const bcrypt = require('bcrypt');
  SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
// fields created for login//
      email: {
        type:mongoose.SchemaTypes.Email,// mongoose email validator
        required:false,
        allowBlank: false,
        unique:false
      },
      password: {
        type: String
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      signUpdate: {
        type: Date,
        default: Date.now()
      },  

// additional fields created for registeration

first_name:{
  type:String,
  required:false
},
last_name:{
  type:String,
  required:false
},

phone:{
  type:String,
  required:false,
  default:"647-122-3344"
},

twitterAccount:{
  type:String,
  required:false,
  default:"abcd1234"
},

address:{
  type:String,
  required:false,
  default:"Toronto Canada"
},

postalcode:{
  type:String,
  required:false,
  default:"M4C5A2"
},

province:{
  type:String,
  required:false,
  default:"ON"
},

favthings:{
  type:String,
  required:false
},
interesthobby:{
  type:String,
  required:false,
  default:"traveling, coding"
},
personality:{
  type:String,
  required:false
},

amountToSpend:{
  type:Number,
  required:false,
  default:25
},

// end of field created for registeration

      // fields added for watsonAnalysis
        
        Openness:{
          type:Number
        },
        Conscientiousness:{
          type:Number
        },
        Extraversion:{
          type:Number
        },
        Agreeableness:{
          type:Number
        },
        EmotionalRange:{
          type:Number
        },
        PersonalityAnalysed:{
          type:Boolean

        } // end of watsonAnalysis field





})


UserSchema.pre('save', function(next) {
  var user = this;

  if(!user.isModified('password')) return next();

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});


UserSchema.methods.comparePassword = function(candidatePassword, callback) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
      if (err) return callback(err);
      callback(undefined, isMatch);
    });
};

  module.exports = mongoose.model('User', UserSchema);
