import {React,useState }from "react"
import { TextField } from "@material-ui/core"
import SendIcon from "@material-ui/icons/Send"
import AttachFileIcon from '@material-ui/icons/AttachFile';

export default function CommentArea(props)
{
    const [height,setHeight]=useState("14px")
    return(
        <div style={{display:"flex",width:"100%",marginTop:"14px",overflowX:"auto"}}>
        <div style={{border:"1px solid black",width:"290%",borderRadius:"7px",marginTop:"16px",margin:"1px",padding:"1px",
        overflowX: "auto",height:"max-content"
    }}>
          <TextField id="standard-multiline-flexible"
              label="Type"
              placeholder="Type a message"
              multiline  
              maxRows={4} 
             style={{width:"100%"}}
             onChange={()=>{
                            // props.setText(document.getElementById("standard-multiline-flexible").value)
                            // console.log(props.text)
                            setHeight(document.getElementById("standard-multiline-flexible").style.height)}
                            }/>
          </div>
          <div style={{display:"inline-flex",width:"20%",marginTop:"2%" }}>
          <AttachFileIcon style={{marginTop:height}}/>
          < SendIcon style={{marginTop:height}}/>
          </div>
          </div>
    )
}