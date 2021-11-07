import express from 'express'

import mongoose from'mongoose'

import model from '../Models/Answer.js'

const router = express.Router()

export const getAnswers=async(_req,res,_next)=>{

    const data= await model.find()
    console.log("recieved and send")
    res.status(200).json(data)
}

export const postAnswer=async(req,res,_next)=>{

  const {name,imageURL,text,date,edited}=req.body

  const newAnswer= new model({name,imageURL,text,date})

 await newAnswer.save()

  res.status(200).json(newAnswer)
}

export const updateAnswer=async(req,res,_next)=>{
  
  const id =req.params.id

  console.log(id,req.body)

  const {text,date}=req.body
  
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) return res.status(404).send(`No post with id: ${id}`);

  const toUpdate =await  model.findById(id)

  toUpdate.text=text

  toUpdate.date = date

  toUpdate.edited = true

  await toUpdate.save()

  console.log(toUpdate)

  res.status(200).json(toUpdate)
}
export default router