import communityModel from '../Models/Communities.js';
import UserModel from "../Models/signUp.js";



export const getAllCommunity = async (req,res) => {
  try{
  const allCommunity = await communityModel.find();
  if(allCommunity){
      res.status(200).json(allCommunity);
  }else{
      res.status(404).json(`No community found`);
  }
  }catch(err){
      res.status(409).json({message:err.message})
}
}

export const createCommunity = async (req,res)=>{
    const community = req.body;
    const newCommunity = new communityModel(community);
    try{
     const data= await newCommunity.save();
     if(data){
      res.status(201).json(newCommunity);
     }else{
      res.status(400).json(`Community does not created`);
     }
      
    }catch(error){
        res.status(409).json({message:error.message});
    }
}

export const joinCommunity = async (req,res)=>{

    const id = req.params.id;

    try{
        if(!req.userId) {
            return res.json({message:'Unauthenticated'});
          }
          const data = await communityModel.findById(id);
          const user = await UserModel.findById(req.userId);
          const index = data.members.findIndex((id)=> id===String(req.userId));
          if(index === -1){
            data.members.push(req.userId);
            user.communities.push(data.name);

          }else{
            data.members = data.members.filter((id)=> id !==String(req.userId));
            user.communities = user.communities.filter((name)=>name !== data.name);
          }
           const updateddata = await communityModel.findByIdAndUpdate(id,data,{new:true});           
           const userUpdate = await UserModel.findByIdAndUpdate(req.userId,user,{new:true});
           

           if( updateddata !== null && userUpdate !==  null ){
             res.status(200).json({community:updateddata,userCommunity:userUpdate});
           }else{
             res.status(404).json(` Post with id:${id} cannot be updated`);
           }

    }catch(e){
        next(e); 
    }
}