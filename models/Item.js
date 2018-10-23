const mongoose = require("mongoose");//ORM for mongoDB
const Schema = mongoose.Schema;

const ItemSchema = new Schema ({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:false
    },
    date:{
        type:Date,
        default:Date.now()
    }

})

const Item = mongoose.model("item", ItemSchema);

module.exports = Item