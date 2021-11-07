import  mongoose from'mongoose'

const Schema =mongoose.Schema

const answerSchema =new Schema({
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
        required:true
    },
    edited:{
        type:Boolean,
        default:false
    }
})

const model= mongoose.model('answer',answerSchema)

export default model