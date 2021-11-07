import { useState } from "react"
import React from "react"
import { IconButton } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import {useEffect} from 'react' 
import { Typography } from "@material-ui/core"
import { postmessage } from "../../actions/messages"
import { TextField } from "@material-ui/core"
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { useDispatch } from "react-redux"

export default function Messages({messages,time,result,dis,cont,email,socket,send}){

  const [mEssages,setmessages]=useState(cont.messages)
  useEffect(()=>setmessages(cont.messages),[cont.messages])
  const [text,setText]=useState("")
  const dispatch = useDispatch()
  const [tar,setTar]=useState()
    return(
        <div>
          <div style={{position:"absolute",
        height:"70%",
        width:"100%",overflow:"auto",display:"flex",flexDirection:"column-reverse"}}>
         {mEssages?
       (
       mEssages.slice(0).reverse().map((message)=>
      <div style={{padding:"5px",position:"relative",display:"inline-flex",flexDirection:"row",width:"100%",justifyContent:message[0]?"flex-end":"flex-start"}}>
  
       <div style={{backgroundColor:"#e7e3e3",width:"max-content",maxWidth:"80%",borderRadius:"7px",padding:"5px"}}> 
       <div 
     style={{width: "max-content" ,maxWidth:"100%",
     fontFamily:"Montserrat",
     fontWeight:"600",padding:"0",wordWrap:"break-word"}}
     >
       {message[1]}
     </div>
       <div style={{marginRight:0,width:"max-content"}}>
       <Typography variant="subtitle2">{time}</Typography>
       </div>
       </div>
       </div>
       )
       ):
       (<div></div>)
       }
       </div>
        <div style={{display:"block",position:"absolute",
      height:"max-content",
      bottom:"0",
      width:"100%",
      backgroundColor:"white",
      borderRadius:"7px",
      borderStartStartRadius:"0px",
      borderStartEndRadius:"0px"}}>
      <TextField id="standard-multiline-flexible"
              placeholder="Type Here"
              multiline  
              maxRows={4} 
              style={{width:"75%"}}
              variant="outlined"
              onChange={(e)=>{setText(e.target.value)
                setTar(e)}}
                />
        <div style={{display:"inline-flex",marginTop:"2%",bottom:"0%",position:"absolute",right:"0",}}>
          <IconButton aria-label="add" style={{paddingBottom:"1.5vw",height:"3vw",width:"3vw",padding:"5px",color:"black",margin:"1px",marginBottom:"10px"}}>
          <AttachFileIcon  style={{marginTop:"19px",fontSize:"2.4rem"}}/>
          </IconButton>
          <IconButton style={{paddingBottom:"1.5vw",height:"3vw",width:"3vw",padding:"5px",color:"black",margin:"1px",marginBottom:"10px"}}>
          < SendIcon style={{marginTop:"19px",fontSize:"2.4rem",}} onClick={()=>{
            setmessages(mEssages=>[...mEssages,[true,text]])
            send(text)
            if(tar.target)
            tar.target.value=""}} />
          </IconButton>
      </div>         
                </div>
        </div>
    )
}