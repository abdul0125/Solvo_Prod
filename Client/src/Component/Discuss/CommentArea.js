import {React,useState }from "react"
import { TextField } from "@material-ui/core"
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate"
import SendIcon from "@material-ui/icons/Send"
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import  IconButton  from "@material-ui/core/IconButton";
import { createDiscuss } from "../../actions/actions";
export default function CommentArea({likes,dislikes,setLikes,setDislikes})
{
  const dispatch=useDispatch()
  let name="";
  let email="";
  useSelector((state)=>{name=state.authReducer.name
        email=state.authReducer.email
        })
  
  const [clear,setclear]=useState(0)
  const [comment,setComment]=useState({name:name,imageURl:'toadd',text:"",likes:0,date:Date(),dislikes:0,email:email})


  useEffect( () =>{
    setComment(comment)
   },[comment])

  const handle=async(e)=>{
    dispatch(createDiscuss({...comment,name:name,date:Date(),text:clear.target.value,email:email}))
    setComment({name:'Naved',imageURl:'toadd',text:"",likes:0,date:Date(),dislikes:0})
    if(clear)
    clear.target.value=""
    
  }


    return(
        <div style={{display:"flex",width:"100%",position:"relative"}}>
        <div id="changed"style={{border:"1px solid black",width:"80%",borderRadius:"7px",marginTop:"13px",padding:"5px",overflow: "hidden",
        overflowX: "auto",marginBottom:"8px",
    }}>
          <TextField id="standard-multiline-flexible"
              label="Type your thought"
              placeholder="Type Here"
              multiline  
              maxRows={4} 
             style={{width:"100%"}}
             onChange={(e)=>{
               setclear(e)
               return setComment({...comment,text:e.target.value})}}/>
          </div>
          <div style={{display:"inline-flex",width:"20%",marginTop:"2%",position:"absolute",bottom:"0",right:"0"}}>
          <IconButton aria-label="add" style={{paddingBottom:"1.5vw",height:"3vw",width:"3vw",padding:"5px",color:"black",margin:"10px"}}>
          <AddPhotoAlternateIcon  style={{marginTop:"19px",fontSize:"2.4rem"}}/>
          </IconButton>
          <IconButton style={{paddingBottom:"1.5vw",height:"3vw",width:"3vw",padding:"5px",color:"black",margin:"10px"}}>
          < SendIcon style={{marginTop:"19px",fontSize:"2.4rem",}} onClick={()=>{
            handle()}}/>
          </IconButton>
          
          </div>
           </div>
    )
}