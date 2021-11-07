import express from 'express'

import mongoose from 'mongoose'

import model from '../Models/comments.js'

import Discussion from '../Models/Discussion.js'

import UserModel from "../Models/signUp.js";

const router = express.Router()


export const getComment = async (_req,res,_next)=>{
    
    const commentsData = await model.find()
    res.status(200).json(commentsData)
    
}

export const post = async (req,res,_next)=>{
    console.log(req.body)

    const {name,imageURL,text,likes,date,email} = req.body

    console.log(email)
    const newComment = new model({name,imageURL,text,likes,date,email:email})

    await newComment.save()
    
    res.status(200).json(newComment)

}

export const deleteComment = async (req,res,next)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send(`No post with id: ${id}`);
    await model.findByIdAndRemove(req.params.id)
    res.status(201).json(req.params.id)
}

export const likeComment = async (req,res,next)=>{
    const {name,email}=req.body
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send(`No post with id: ${id}`);
    const comment = await model.findById(req.params.id)
    const user = await UserModel.findOne({email})
    if(req.body.dislike)
   { comment.dislikes=comment.dislikes+1
    user.Notifications.push({text:`${name} has disliked your answer`,Date:Date()})
   } else
   {
        comment.likes = comment.likes+1
    user.Notifications.push({text:`${name} has liked your answer`,Date:Date()})
   }
   user.save()
    comment.save()
    res.status(200).json(comment)
}

export const postDiscuss = async(req,res,next)=>{

    const {name,imageURL,text,date,email}=req.body

    const newDiscussion = new Discussion({name,imageURL,text,date,email})

    await  newDiscussion.save()


    res.status(200).json(newDiscussion)

}
export const reply = async(req,res,next)=>{

    const {name,imageURL,text,date,poster,email,id}=req.body
    console.log(text,id)

    const newDiscussion = await Discussion.findById(id)

    console.log(newDiscussion)

    newDiscussion.Replies.push({text:text, name:name, date:date})

    await  newDiscussion.save()

    const user =await UserModel.findOne({email:poster})

    user.Notifications.push({text:`${name} has replied to your discussion`,Date:Date()})

    user.save()

    res.status(200).json(newDiscussion._id)

}

export const getDiscuss = async(req,res,next)=>{

    const data = await Discussion.find()
   
    res.status(200).json(data)

}
export const deleteDiscuss = async (req,res,next)=>{
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send(`No post with id: ${id}`);
    await Discussion.findByIdAndRemove(req.params.id)
    console.log("Deleted",Discussion.find())
    res.status(201).json(req.params.id)
}

export default router