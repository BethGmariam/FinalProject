const mongoose = require('mongoose');
require('mongoose-type-email');// to validate email address
const bcrypt = require('bcrypt');
  SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({
// fields created for login//
      email: {
        type:mongoose.SchemaTypes.Email,// mongoose email validator
        required:true,
        allowBlank: false,
        unique: true
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
  required:false
},

twitterAccount:{
  type:String,
  required:false
},

address:{
  type:String,
  required:false
},

postalcode:{
  type:String,
  required:false
},

province:{
  type:String,
  required:false
},

favthings:{
  type:String,
  required:false
},
interesthobby:{
  type:String,
  required:false
},
personality:{
  type:String,
  required:false
} // end of field created for registeration

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
