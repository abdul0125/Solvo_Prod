import notesModel from '../Models/Notes.js';

export const getNotes = async (req,res) => {
  try{
  const allNotes = await notesModel.find();
 
  if(allNotes)
  {
      res.status(200).json(allNotes);
  }else{
      res.status(404).json(`No notes found`);
  }
  }catch(err){
      res.status(409).json({message:err.message})
}
}


    

    export const uploadNotes = async (req,res)=>{
        const notes = req.body;
        const newNotes =  new notesModel({...notes, creator: req.userId});
        try{
         const data= await newNotes.save();
         if(data){
          res.status(201).json(newNotes);
         }else{
          res.status(400).json(`Notes does not uploaded`);
         }
          
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }

    export const updateNotes = async (req,res)=>{
        const updateNotes = req.body;
        const id = req.params.id;
    
        try{
         
             const data = await notesModel.findByIdAndUpdate(id,updateNotes, {new:true});
             if(data){
                
                res.status(200).json(data);
               }else{
                res.status(400).json(`Notes could not updated`);
               }
        
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }


    export const deleteNotes = async (req,res)=>{
    
        const id = req.params.id;
    
        try{
         
             const data = await notesModel.findByIdAndDelete(id);
             if(data){
                
                res.status(200).json(`notes deleted with id: ${id}`);
               }else{
                res.status(400).json(` notes with id:${id} does not exist`);
               }
        
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }
