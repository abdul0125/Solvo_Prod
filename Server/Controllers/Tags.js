import tagsModel from '../Models/Communities.js';
import UserModel from '../Models/signUp';

 export const createHint = async (req,res,next) =>
 {
           const content = req.body.content;
           const userId = req.userId;
           try{
            const user  = await UserModel.findById(userId);
            const isUser = await UserModel.find({tags:content})
            if(user){
                const tag  = new tagsModel
                ({
                    content:content,
                    
                });
                user.tags.push(tag); //id will be push bcs of ref given
                await Promise.all([tag.save(), user.save()])
                res.status(200).json(tag);
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