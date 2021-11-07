import React from "react"
import { Button,Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
const {useState} = React;

export default function LongText({ content,limit,edit,setComment,comment}) {
const [showAll, setShowAll] = useState(false);
const [value,setValue]=useState(content)
const showMore = () => setShowAll(true);
const showLess = () => setShowAll(false);


  if (content.length <= limit) {
    // there is nothing more to show
    if(edit)
    return <div style={{width:"100%"}}><TextField multiline style={{width:"100%"}}
    InputProps={{ disableUnderline: true , style: {width: "100%" ,fontFamily:"Montserrat",fontWeight:"600"}}}
     value={value}
     onChange={(e)=> {
      setComment({...comment,text:e.target.value}) 
      setValue(e.target.value)}} ></TextField></div>
    else
    return <div style={{fontFamily:"Montserrat",fontWeight:"600"}}>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return <div style={{paddingRight:"20px"}}> 
      <TextField><Typography ></Typography></TextField> 
      <Button  onClick={showLess} style={{lineHeight:"11px",paddingLeft:"0px"}}>Read less</Button> 
    </div>
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return <div style={{paddingRight:"20px"}}> 
   <TextField><Typography >{toShow}</Typography></TextField> 
    <Button  onClick={showMore} style={{lineHeight:"11px",paddingLeft:"0px"}}>Read more</Button>
  </div>
}

