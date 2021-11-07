import mongoose from 'mongoose';
 const Schema = mongoose.Schema;

 const notesSchema = new Schema({
     name:String,
     creator:String,
     selectedFile:String,
     restrictions:{type: Boolean, default:false},

 },{
     timestamps:true
 });

 const NotesModel = mongoose.model('Notes',notesSchema);

 export default NotesModel;