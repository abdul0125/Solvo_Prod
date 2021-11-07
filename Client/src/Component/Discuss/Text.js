import React from "react"
import { Button,Typography } from "@material-ui/core";
const {useState} = React;

export default function LongText({ content,limit}) {
const [showAll, setShowAll] = useState(false);


const showMore = () => setShowAll(true);
const showLess = () => setShowAll(false);

  if (content.length <= limit) {
    // there is nothing more to show
    return <div style={{fontFamily:"Montserrat",fontWeight:"600"}}>{content}</div>
  }
  if (showAll) {
    // We show the extended text and a link to reduce it
    return <div style={{paddingRight:"20px"}}> 
      <Typography >{content}</Typography> 
      <Button  onClick={showLess} style={{lineHeight:"11px",paddingLeft:"0px"}}>Read less</Button> 
    </div>
  }
  // In the final case, we show a text with ellipsis and a `Read more` button
  const toShow = content.substring(0, limit) + "...";
  return <div style={{paddingRight:"20px"}}> 
   <Typography > {toShow} </Typography> 
    <Button  onClick={showMore} style={{lineHeight:"11px",paddingLeft:"0px"}}>Read more</Button>
  </div>
}

