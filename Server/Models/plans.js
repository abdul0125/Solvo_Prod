import mongoose from "mongoose";

const PlanSchema = mongoose.Schema({
    userid: {type:String},
    Weekly: {
        days:{type:Array,default:[]},
        time: {type:String, default:''},
        duration:{type:Number,default:30},
        price:{type:Number,default:0},
        subject:{type:String,default:''}
     },
    Monthly: {
       days:{type:Array,default:[]},
       time: {type:String, default:''},
       duration:{type:Number,default:30},
       price:{type:Number,default:0},
       subject:{type:String,default:''}
    }   
});

export default mongoose.model('Plans',PlanSchema);