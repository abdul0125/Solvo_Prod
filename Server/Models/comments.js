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
    likes:{
        type:Number,
        required:true,
        default:0
    },
    date:{
        type:String,
        required:true,
    },
    dislikes:{
        type:Number,
        required:true,
        default:0
    },
    email:{
        type:String,
        required:true,
    }
})

const model = mongoose.model('Comment',commentSchema)
 export default model