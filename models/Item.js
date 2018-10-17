const mongoose = require("mongoose");//ORM for mongoDB
const Schema = mongoose.Schema;
const ItemSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
        date:{
        type:Date,
        default:Date.now()
    }

})

const Items = mongoose.model("item", ItemSchema);

module.exports = Items