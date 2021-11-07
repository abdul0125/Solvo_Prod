import lectureModel from '../Models/Lecture.js';

export const getAllVideo = async (req,res) => {
  const { page } = req.query;
  console.log(page,"request made")
  try{

    const LIMIT = 2;
    const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page

    const total = await lectureModel.countDocuments({});
    console.log(total/LIMIT)
    const posts = await lectureModel.find().sort({ _id: -1 }).limit(LIMIT).skip(startIndex);

    if(posts){
    console.log(total/LIMIT)
    res.json({ data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
  }
  else{
      res.status(404).json(`No video found`);
  }
  }catch(err){
      res.status(409).json({message:err.message})
}
}


    

    export const uploadVideo = async (req,res)=>{
        const video = req.body;
        cosole.log(req.userId)
        const newVideo = new lectureModel({...video, creator: req.userId});
        try{
         const data= await newVideo.save();
         const LIMIT = 2;
         const startIndex = (Number(page) - 1) * LIMIT; // get the starting index of every page
     
         const total = await lectureModel.countDocuments({});
         if(data){
           console.log("saved")
          res.status(201).json({ data: newVideo,  numberOfPages: Math.ceil(total / LIMIT)});
         }else{
          res.status(400).json(`Video does not created`);
         }
          
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }

    export const updateVideo = async (req,res)=>{
        const updateVideo = req.body;
        const id = req.params.id;
    
        try{
         
             const data = await lectureModel.findByIdAndUpdate(id,updateVideo, {new:true});
             if(data){
                
                res.status(200).json(data);
               }else{
                res.status(400).json(`Video could not updated`);
               }
        
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }


    export const deleteVideo = async (req,res)=>{
    
        const id = req.params.id;
    
        try{
         
             const data = await lectureModel.findByIdAndDelete(id);
             if(data){
                
                res.status(200).json(`video deleted with id: ${id}`);
               }else{
                res.status(400).json(` video with id:${id} does not exist`);
               }
        
        }catch(error){
            res.status(409).json({message:error.message});
        }
    }

    export const likeVideo = async (req,res,next)=>{
        const id = req.params.id;
        console.log(id,req.userId)
        
        try{
          if(!req.userId) {
            return res.json({message:'Unauthenticated'});
          }
          const data = await lectureModel.findById(id);
         const index = data.likes.findIndex((id)=> id===String(req.userId));
         if(index === -1){
           data.likes.push(req.userId);
         }else{
           data.likes = data.likes.filter((id)=> id !==String(req.userId));
         }
          const updateddata = await lectureModel.findByIdAndUpdate(id,data,{new:true});
          if(updateddata){
            res.status(200).json(updateddata); 
          }else{
            res.status(404).json(` Video with id:${id} cannot be updated`);
          }
        }catch(e){
          next(e); 
        }
      }

      export const viewVideo = async (req,res,next)=>{
        const id = req.params.id;
        
        try{
          if(!req.userId) {
            return res.json({message:'Unauthenticated'});
          }
          const data = await lectureModel.findById(id);
         const index = data.views.findIndex((id)=> id===String(req.userId));
         if(index === -1){
          const updateddata =  data.views.push(req.userId);

           if(updateddata){
            res.status(200).json(updateddata); 
          }else{
            res.status(404).json(` Video with id:${id} cannot be updated`);
          }
         }else{
            res.status(404).json(` Video with id:${id} already viewed`);
         }
          
        }catch(e){
          next(e); 
        }
      }
       