import mongoose from 'mongoose';
 const Schema = mongoose.Schema;

 const AskExpertSchema = new Schema({
     topic:String,
     message:String,
     college_name:String,
     creator:String,
     tags:[String],
     profile_pic:String,
     selectedFile:String,
     likes:{type:[String], default:[]},
     hints:[{type:mongoose.Types.ObjectId, ref: 'Hint'}],
     answer:{type:[String], default:[]},
     too_long:{type:[String], default:[]},
     out_of_my_knowledge:{type:[String], default:[]},
     incomplete_question:{type:[String], default:[]},
     incorrect_subject:{type:[String], default:[]},
     other_reason:{type:[String], default:[]}
 },{
     timestamps:true
 });

 const AskExpertModel = mongoose.model('AskExpert',AskExpertSchema);
 export default AskExpertModel;