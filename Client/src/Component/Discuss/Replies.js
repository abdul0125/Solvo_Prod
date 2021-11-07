import {React} from "react"
import LongText from './Text';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Image from "../Comment/naved.jpg"
import { Button } from "@material-ui/core";
import { useState } from "react";

import moment from "moment"
export default function Replies({id}){
    const [disp,setDisp]=useState(false)
    return(<>
        <Button onClick={()=>setDisp(!disp)}>{id.Replies.length} Replies</Button>
        <List style={ {display:disp?"block":"none",marginLeft:"6vw"}}>
                   {id.Replies.map((id) => (
             
         <ListItem button style={{overflow:"hidden",overflowX:"auto",display:"block",}}>
         
         <div style={{}}>
         <div style={{height:"49px"}}>
         <ListItemAvatar style={{position:"absolute",top:"8px",display:"inline"}}>
         <div style={{display:"inline"}}>
         <Avatar  src={Image} />
         </div>
         <div style={{display:"block",position:"absolute",top:"-2px",left:"47px",width:"max-content"}}>
         <Typography variant="h4" style={{fontSize:"1.2rem"}}>{id.name}</Typography>
         <Typography variant="subtitle2" >{moment(id.date).fromNow()}</Typography>
         </div>
         
         </ListItemAvatar>
         </div>
         <div style={{marginTop:"15px"}}>
         <LongText content={id.text} limit="150"/>
         <br/>
         <div style={{display:"inline",marginRight:"10px"}}>
         </div>
        
         </div>
         </div>
       </ListItem>
                   ))}
                 </List>
                    </>
    )
}