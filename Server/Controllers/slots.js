import SlotSchema from '../Models/slots.js';

import UserModel from "../Models/signUp.js";

import { createRequire } from "module";
const require  =  createRequire(import.meta.url);

export const Slot = async (req, res) => {
    const { userid, days } = req.body;
    const slots = req.body;
    console.log(req.body)

    let oldSlot = await SlotSchema.findOne({ userid });

    if (oldSlot) {
       oldSlot.days=days
    await oldSlot.save()
    // console.log(oldSlot)
    res.status(201).json(oldSlot.days)
    }

    else {
        const newSlot = new SlotSchema(slots);
        try {
            const data = await newSlot.save();
            if (data) {
                res.status(201).json(newSlot.days);
            }
            else {
                res.status(400).json(`Slots does not stored`);
            }

        }
        catch (error) {
            res.status(409).json({ message: error.message });
        }
    }

}
export const getTimeTable=async(req,res)=>{

    const {userid} = req.body
    
    let data = []
    
    data = await SlotSchema.findOne({ userid });
    
    res.status(200).json(data?data.days:[])


}
export const book_slot = async(req,res)=>{
    console.log(req.body)
    const {student,semail,temail,slot} = req.body 

   const  user= await UserModel.findOne({temail})

    user.Notifications.push({text:`${student} has booked your slot on ${slot[1]} starting at ${slot[0]} of duration ${slot[2]}mins`,Date:Date()})

    await user.save()
    const  studen= await UserModel.findOne({semail})

    studen.Notifications.push({text:`you have booked a slot on ${slot[1]} starting at ${slot[0]} of duration ${slot[2]}mins`,Date:Date()})

    await studen.save()

    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'navedkhanmohd76@gmail.com',
    pass: 'fetwpmwkxgnlosoy'
  }
});

var mailOptions = {
  from: 'navedkhanmohd76@gmail.com',
  to: 'gj8774@myamu.ac.in',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
    // console.log(studen.Notifications)
    res.status(201).json(studen.Notifications)
}