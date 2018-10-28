const mongoose = require('mongoose');
// const mongooseBcrypt = require('mongoose-bcrypt');
const UserSchema = new mongoose.Schema({

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
    trim: true
  },
  username: {
    type: String,
    unique: true,
    required: false,
    trim: true,
    index: { unique: true }
  },
  date:{
    type:Date,
    default:Date.now()
}
});

UserSchema.plugin(require('mongoose-bcrypt'));


const User = mongoose.model('User', UserSchema);
module.exports = User;

