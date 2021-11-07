import hintModel from '../Models/Hints.js';
import askExpertModel from '../Models/AskExpert.js';

 export const createHint = async (req,res,next) =>
 {
           const content = req.body.content;
           const id = req.params.id;
           try{
            const post  = await askExpertModel.findById(id);
            if(post){
                const comment  = new hintModel
                ({
                    content:content,
                    creator: req.userId
                });
                post.hints.push(comment); //id will be push bcs of ref given
                await Promise.all([comment.save(), post.save()])
                res.status(200).json(comment);
            } else{
                res.status(304).json({message:"post not found"}); 
            }  
          
           }catch(error){
            res.status(409).json({message:error.message});
           }

 }

 export const updateHint = async (req,res)=>{
    const content = req.body.content;
    const id = req.params.id;
    try{
     
         const data = await hintModel.findByIdAndUpdate(id,content, {new:true});
         if(data){
            
            res.status(200).json(data);
           }else{
            res.status(400).json(`Hint could not updated`);
           }
    
    }catch(error){
        res.status(409).json({message:error.message});
    }
}


export const deleteHint = async (req,res)=>{
    
    const id = req.params.id;

    try{
     
         const data = await hintModel.findByIdAndDelete(id);
         if(data){
            
            res.status(200).json(`Hint deleted with id: ${id}`);
           }else{
            res.status(400).json(` Hint with id:${id} does not exist`);
           }
    
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const likeHint = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await hintModel.findById(id);
     const check = data.dislikes.findIndex((id)=> id===String(req.userId));
    
                   
     if(check === -1){
      

    const index =  data.likes.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.likes.push(req.userId);
     }else{
       data.likes = data.likes.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await hintModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Hint with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Hint with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }


  export const dislikeHint = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await hintModel.findById(id);
     const check = data.likes.findIndex((id)=> id===String(req.userId));
    
                   
     if(check === -1){
      

    const index =  data.dislikes.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.dislikes.push(req.userId);
     }else{
       data.dislikes = data.dislikes.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await hintModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Hint with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Hint with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }

