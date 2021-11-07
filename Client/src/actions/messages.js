import { getMessage,postMessage,addContact } from "../api";

export const getmessage = (_id)=>async (dispatch ) => {
    console.log(_id)
    const {data} = await getMessage(_id)

    dispatch({type:'FETCH_ALL_MESSAGES',payload:data})

}
export const postmessage = (_id,sender,reciever,message)=>async (dispatch ) => {
   
   const {data} =  await postMessage(_id,sender,reciever,message)

    dispatch({type:'POST_MESSAGE',payload:data})
}
export const addcontact = (name,email,sender)=>async(dispatch)=>{
    console.log(name,email)
    const {data}=await addContact(name,email,sender)
    console.log(data)
    dispatch({type:"ADD_CONTACT",payload:data})
}