import askExpertModel from '../Models/AskExpert.js';

export const getAllPost = async (req,res) => {
  try{
  const allPost = await askExpertModel.find().populate('hints').sort({_id: -1 });
  if(allPost){
      res.status(200).json(allPost);
  }else{
      res.status(404).json(`No post found`);
  }
  }catch(err){
      res.status(409).json({message:err.message})
}
}

export const createPost = async (req,res)=>{
    const post = req.body;
    const newPost = new askExpertModel(post);
    try{
     const data= await newPost.save();
     if(data){
      res.status(201).json(newPost);
     }else{
      res.status(400).json(`Post does not created`);
     }
      
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const updatePost = async (req,res)=>{
    const updatePost = req.body;
    const id = req.params.id;

    try{
     
         const data = await askExpertModel.findByIdAndUpdate(id,updatePost, {new:true}).populate('hints');
         if(data){
            
            res.status(200).json(data);
           }else{
            res.status(400).json(`Post could not updated`);
           }
    
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const deletePost = async (req,res)=>{
    
    const id = req.params.id;

    try{
     
         const data = await askExpertModel.findByIdAndDelete(id);
         if(data){
            
            res.status(200).json(`post deleted with id: ${id}`);
           }else{
            res.status(400).json(` Post with id:${id} does not exist`);
           }
    
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const likePost = async (req,res,next)=>{
    const id = req.params.id;
  
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
      
      
     const index = data.likes.findIndex((id)=> id===String(req.userId));
     if(index === -1){
       data.likes.push(req.userId);
     }else{
       data.likes = data.likes.filter((id)=> id !==String(req.userId));
     }
      const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated`);
      }
    }catch(e){
      res.status(409).json({message:error.message});
    }
  }


  export const answerPost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
     const check = data.too_long.findIndex((id)=> id===String(req.userId))&&
     data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId))&&
     data.incomplete_question.findIndex((id)=> id===String(req.userId)) &&
     data.incorrect_subject.findIndex((id)=> id===String(req.userId)) &&
     data.other_reason.findIndex((id)=> id===String(req.userId));
                   
     if(check === -1){
      

    const index =  data.answer.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.answer.push(req.userId);
     }else{
       data.answer = data.answer.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }


  export const too_longPost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);

      const check = data.answer.findIndex((id)=> id===String(req.userId))&&
      data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId))&&
      data.incomplete_question.findIndex((id)=> id===String(req.userId)) &&
      data.incorrect_subject.findIndex((id)=> id===String(req.userId)) &&
      data.other_reason.findIndex((id)=> id===String(req.userId));           
                   
     if(check === -1){

    const index =  data.too_long.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.too_long.push(req.userId);
     }else{
       data.too_long = data.too_long.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }


  export const out_of_my_knowledgePost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
     const check = await data.answer.findIndex((id)=> id===String(req.userId)) &&
                   data.too_long.findIndex((id)=> id===String(req.userId)) &&
                   data.incomplete_question.findIndex((id)=> id===String(req.userId)) &&
                   data.incorrect_subject.findIndex((id)=> id===String(req.userId)) &&
                   data.other_reason.findIndex((id)=> id===String(req.userId));
                   
     if(check === -1){

    const index =  data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.out_of_my_knowledge.push(req.userId);
     }else{
       data.out_of_my_knowledge = data.out_of_my_knowledge.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }

  export const incomplete_questionPost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
     const check = await data.answer.findIndex((id)=> id===String(req.userId)) &&
                   data.too_long.findIndex((id)=> id===String(req.userId)) &&
                   data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId)) &&
                   data.incorrect_subject.findIndex((id)=> id===String(req.userId)) &&
                   data.other_reason.findIndex((id)=> id===String(req.userId));
                   
     if(check === -1){

    const index =  data.incomplete_question.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.incomplete_question.push(req.userId);
     }else{
       data.incomplete_question = data.incomplete_question.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated`);
    }
      
    }catch(e){
      next(e); 
    }
  }

  export const incorrect_subjectPost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
     const check = await data.answer.findIndex((id)=> id===String(req.userId)) &&
                   data.too_long.findIndex((id)=> id===String(req.userId)) &&
                   data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId)) &&
                   data.incomplete_question.findIndex((id)=> id===String(req.userId)) &&
                   data.other_reason.findIndex((id)=> id===String(req.userId));
                   
     if(check === -1){

    const index =  data.incorrect_subject.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.incorrect_subject.push(req.userId);
     }else{
       data.incorrect_subject = data.incorrect_subject.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated`);
    }
      
    }catch(e){
      next(e); 
    }
  }

  export const other_reasonPost = async (req,res,next)=>{
    const id = req.params.id;
   
    try{
      if(!req.userId) {
        return res.json({message:'Unauthenticated'});
      }
      const data = await askExpertModel.findById(id);
     const check = await data.answer.findIndex((id)=> id===String(req.userId)) &&
                   data.too_long.findIndex((id)=> id===String(req.userId)) &&
                   data.out_of_my_knowledge.findIndex((id)=> id===String(req.userId)) &&
                   data.incomplete_question.findIndex((id)=> id===String(req.userId)) &&
                   data.incorrect_subject.findIndex((id)=> id===String(req.userId));
                   
     if(check === -1){

    const index =  data.other_reason.findIndex((id)=> id===String(req.userId));
                 
     if(index === -1){
       data.other_reason.push(req.userId);
     }else{
       data.other_reason = data.other_reason.filter((id)=> id !==String(req.userId));
     }
     const updateddata = await askExpertModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated2`);
      }

    }else{
      res.status(404).json(` Post with id:${id} cannot be updated1`);
    }
      
    }catch(e){
      next(e); 
    }
  }