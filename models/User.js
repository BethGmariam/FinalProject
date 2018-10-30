const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
  SALT_WORK_FACTOR = 10;

var UserSchema = new mongoose.Schema({

    first_name:{
    type:String,
    required:true
  },
  last_name:{
    type:String,
    required:true
  },
    email: {
        type: String,
        unique: true,
        required: true,
        default: "chocolate"
      },
      password: {
        type: String,
      },
      isDeleted: {
        type: Boolean,
        default: false
      },
      signUpdate: {
        type: Date,
        default: Date.now()
      }
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
  //module.exports = User;



  // UserSchema.methods.generateHash = function(password) {
  //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  //   };
  //   UserSchema.methods.validPassword = function(password) {
  //     return bcrypt.compareSync(password, this.password);
  //   };












//============================

// const mongoose = require('mongoose');
// // const mongooseBcrypt = require('mongoose-bcrypt');
// const UserSchema = new mongoose.Schema({

//   first_name:{
//     type:String,
//     required:true
//   },
//   last_name:{
//     type:String,
//     required:true
//   },
//   email: {
//     type: String,
//     unique: true,
//     required: true,
//     trim: true
//   },
//   username: {
//     type: String,
//     unique: true,
//     required: false,
//     trim: true,
//     index: { unique: true }
//   },
//   date:{
//     type:Date,
//     default:Date.now()
// }
// });

// UserSchema.plugin(require('mongoose-bcrypt'));


// const User = mongoose.model('User', UserSchema);
// module.exports = User;

