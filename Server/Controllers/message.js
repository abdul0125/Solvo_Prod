import mongoose  from "mongoose";
import UserModel from "../Models/signUp.js";
export const add_Contact=async(req,res)=>{
  let reciever_name = req.body.email
  let reciever_email = req.body.name
  let sender_email = req.body.sender
  let sender=await UserModel.findOne({email:sender_email})
  // console.log(sender_email,sender,sender.name)
  let sender_name = sender.name
  sender.contacts.unshift({name:reciever_name,email:reciever_email,messages:[]})
  let reciever=await UserModel.findOne({email:reciever_email})
  reciever.contacts.unshift({name:sender_name,email:sender_email,messages:[]})
  sender.save()
  reciever.save()
  res.status(201).json(sender.contacts)
}
export const  getmessage= async(req,res)=>{
  //  console.log("connect")
  //  console.log(req.params)
    const _id= req.params.id
   // console.log(`id ${_id}`)
    const {contacts}= await UserModel.findById(_id)
    res.status(201).json(contacts)
}

export const  postmessage= async(req,res)=>{
  //  console.log(req.params,"params")


    const _id = req.params.id
    const {message,sender,reciever} = req.body
    let data= await UserModel.findById(_id)
    let counter=0
    let index=0
    let newContacts = data.contacts.map((contact)=>{
                
                            (contact.email===reciever)?
                            contact.messages.push(message):
                            null
                            if (contact.email===reciever)
                            counter=index
                            index+=1
                        return contact})
    let temp = newContacts[counter]
    newContacts.splice(counter,1)
    newContacts = [temp].concat(newContacts)
    // console.log(counter,index,temp,newContacts)



         UserModel.findByIdAndUpdate({_id: _id},
         {
          $set: {
              contacts:newContacts
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




let data1= await UserModel.find({email : reciever})
    //console.log("reciever data",data1)
        let deleter=0
        let dele=0
        let newContacts1 = data1[0].contacts.map((contact)=>{
                    
                                (contact.email===sender)?
                                contact.messages.push([false,message[1]]):
                                null
                                if(contact.email===sender)
                                deleter=dele
                                dele+=1
                            return contact})
        temp=newContacts1[deleter]
        newContacts1.splice(deleter,1)
        newContacts1 = [temp].concat(newContacts1)
        console.log(newContacts1)
             UserModel.findOneAndUpdate({email: reciever},
             {
              $set: {
                  contacts:newContacts1
                },
             
             },
             {new:true})
             .then((docs)=>{
                if(docs) {
                 // console.log("updated")
                }
            }).catch((err)=>{
             // console.log(err)
            });
    


   // console.log(newContacts1)

    res.status(200).json(newContacts)
}

