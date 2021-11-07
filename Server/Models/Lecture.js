import mongoose from 'mongoose';
 const Schema = mongoose.Schema;

 const lectureSchema = new Schema({
     topic:String,
     message:String,
     college_name:String,
     creator:String,
     tags:[String],
     profile_pic:String,
     selectedFile:String,
     likes:{type:[String], default:[String]},
     views:{type:[String], default:[String]},
     rating:{type:[String], default:[String]},

 },{
     timestamps:true
 });

 const LectureModel = mongoose.model('Lecture',lectureSchema);
 export default LectureModel;