import mongoose from 'mongoose';
 const Schema = mongoose.Schema;

 const AskFeedSchema = new Schema({
     topic:String,
     message:String,
     college_name:String,
     creator:String,
     community:String,
     tags:[String],
     profile_pic:String,
     selectedFile:String,
     likes:{type:[String], default:[]},
     
  
 },{
     timestamps:true
 });

 const AskFeedModel = mongoose.model('Askfeed',AskFeedSchema);
 export default AskFeedModel;