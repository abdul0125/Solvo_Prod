import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Search_users from "../Models/Search_users.js";
import UserModel from "../Models/signUp.js";
import SlotSchema from "../Models/slots.js"

const secret = 'test';

export const signin = async (req, res) => {
  
  const data = req.body;
  console.log("act",data)
  // const oldUser = await UserModel.findOne({ email });
 

  try {
  
    const oldUser = await UserModel.findOne({ email:data.email });

    if (!oldUser) {
      console.log(`User doesn't exist with this email`)
      return res.status(404).json({ message: "User doesn't exist" });
    }
    

     const isPasswordCorrect = await bcrypt.compare(data.password, oldUser.password);

     if (!isPasswordCorrect){
       console.log(`Wrong Password`)
       return res.status(400).json({ message: "Invalid credentials" });
     }
     const token = jwt.sign(
      { 
        email: oldUser.email,
        id: oldUser._id,
        name: oldUser.name,
        password: oldUser.password
        
       },
        secret, { expiresIn: "1h" } );

    res.status(200).json({ result: oldUser, token });
   // console.log(oldUser)
  

  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  //console.log(req.body)
  // res.send()
  const {name, qualifications,learning_skills,email,password,thrust_area,is_mentor,experience_year,interest,Country} = req.body;

  try {
  //  console.log(email)
    const oldUser = await UserModel.findOne({ email });

    if (oldUser) {
      console.log(`User already exists with this email`)
       return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
   // console.log(hashedPassword)
    const result = await UserModel.create({ name,qualifications,learning_skills,email, password: hashedPassword,thrust_area,is_mentor,experience_year,interest,Country});
    //console.log(result)
    await Search_users.create({teacher_name:name,email,subjects:qualifications,learning_skills,thrust_area,experience:experience_year})
    const token = jwt.sign(
       { 
         email: result.email,
         id: result._id,
         name: result.name,
         password: result.password
         
        },
         secret, { expiresIn: "1h" } );

    res.status(201).json({ result, token });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Something went wrong" });
  }

};
export const getUser = async(req,res)=>{
 // console.log(req.params)
  const data = await UserModel.findById(req.params.id)
  const search = await Search_users.find()
 // console.log("send",data)
  res.status(201).json({data:data,search:search})
}


export const editUser = async(req,res)=>{
  // console.log(req.params)
  const {name,mobile,qualifications,learning_skills,thrust_area,interest,known_languages,question_answered,taught_hours,experience,rates} = req.body;
  // const data = await UserModel.findById(req.params.id)
console.log("params id",req.params.id)
let email = UserModel.findById(req.params.id)
email=email.email
  UserModel.findByIdAndUpdate({_id: req.params.id},
    {
     $set: {
       name:name,
         qualifications: qualifications,
         learning_skills: learning_skills,
         thrust_area:thrust_area,
         interest:interest,
         known_languages:known_languages,
         question_answered:question_answered,
         taught_hours:taught_hours,
         experience:experience,
         rates:rates,
         mobile:mobile

       },
    
    },
    {new:true})
    .then((docs)=>{
       if(docs) {
         console.log("updated")
       }
   }).catch((err)=>{
     console.log(err)
   });
  let search = Search_users.findOneAndUpdate({email},
    {
     $set: {
       teacher_name:name,
         subjects: qualifications,
         thrust_area:thrust_area,
         language:known_languages,
         question_answered:question_answered,
         rate:rates,
         mobile:mobile

       },
    
    },
    {new:true})
    .then((docs)=>{
       if(docs) {
         console.log("updated")
       }
   }).catch((err)=>{
     console.log(err)
   })

  // console.log("send",data)
   res.status(201)
 }
export const search=async(req,res)=>{
  const {email} = req.body
  const {_id,name,mobile,qualifications,learning_skills,thrust_area,interest,known_languages,question_answered,taught_hours,experience,rates}=await UserModel.findOne({email})
  const table = await SlotSchema.findOne({userid:_id})
  res.status(200).json({email,name,mobile,qualifications,table,learning_skills,thrust_area,interest,known_languages,question_answered,taught_hours,experience,rates})
}