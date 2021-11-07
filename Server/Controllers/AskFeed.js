import askFeedModel from '../Models/AskFeed.js';
import UserModel from "../Models/signUp.js";



export const getAllPost = async (req,res) => {

    const userId = req.userId;
    
     try{
       
        const currentUser = await UserModel.findById(userId); 
        const post1  = await askFeedModel.find({topic: currentUser.learning_skills});
        const post2 = await askFeedModel.find({topic: currentUser.thrust_area});
        const post3  = await askFeedModel.find({topic: currentUser.interest});
      
       
        const post4 = await askFeedModel.find({community:currentUser.communities});
        let post = post1.concat(post2,post3,post4);
        let allPost = [...new Set(post)];
        
        allPost.sort((a, b) =>b.createdAt - a.createdAt);
       

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
    
    const newPost =  new askFeedModel(post);
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
     
         const data = await askFeedModel.findByIdAndUpdate(id,updatePost, {new:true}).populate('hints');
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
     
         const data = await askFeedModel.findByIdAndDelete(id);
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
      const data = await askFeedModel.findById(id);
     const index = data.likes.findIndex((id)=> id===String(req.userId));
     if(index === -1){
       data.likes.push(req.userId);
     }else{
       data.likes = data.likes.filter((id)=> id !==String(req.userId));
     }
      const updateddata = await askFeedModel.findByIdAndUpdate(id,data,{new:true});
      if(updateddata){
        res.status(200).json(updateddata); 
      }else{
        res.status(404).json(` Post with id:${id} cannot be updated`);
      }
    }catch(e){
      next(e); 
    }
  }