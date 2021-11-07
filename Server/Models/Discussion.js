import mongoose from "mongoose";

const Schema=mongoose.Schema

const commentSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    imageURl:{
        type: String,
    },
    text:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
   Replies:{
       type:Array,
       default:[]
   }
})

const Discussion = mongoose.model('Discussion',commentSchema)
 export default Discussion