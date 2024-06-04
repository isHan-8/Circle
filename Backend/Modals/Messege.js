const mongoose  = require("mongoose");

const MessegeSchema = new  mongoose.Schema({
   Chatusers:{
        type:Array,
        require:true
   },
   messege:{
    type:String,
    require:true
   },
   Sender:{
    type:mongoose.Schema.Types.ObjectId,
    require:true
   }
},{timestamps:true})

module.exports = mongoose.model("Messege" , MessegeSchema);