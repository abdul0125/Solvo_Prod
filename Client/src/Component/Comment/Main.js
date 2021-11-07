import {React, useState} from "react"
import Reply from './Reply';
import LongText from './Text';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Image from "./naved.jpg"
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getComments } from "../../actions/actions";
import { CircularProgress } from "@material-ui/core";
export default function Main({likes,dislikes,setLikes,setDislikes})
{
    let name  =""
   const data= useSelector((state)=>{
    name=state.authReducer.name
    return state.comments.hints})
   if(!data.length)
   {
     return(<Paper square style={{padding:"50"}}><Typography variant="h5">Be the first to Discuss</Typography></Paper>)}
    return(
        <Paper square style={{padding:"50"}}>
          
        <List style={ {marginBottom: "2"}}>
              {data.map((id) => (
        
    <ListItem button style={{overflow:"hidden",overflowX:"auto",display:"block",}}>
    
    <div style={{}}>
    <div style={{height:"49px"}}>
    <ListItemAvatar style={{position:"absolute",top:"8px",display:"inline"}}>
    <div style={{display:"inline"}}>
    <Avatar  src={Image} />
    </div>
    <div style={{display:"block",position:"absolute",top:"-2px",left:"47px",width:"max-content"}}>
    <Typography variant="h4" style={{fontSize:"1.8rem"}}>{id.name}</Typography>
    <Typography variant="subtitle2" >{moment(id.date).fromNow()}</Typography>
    </div>
    
    </ListItemAvatar>
    </div>
    <div style={{marginTop:"15px"}}>
    <LongText content={id.text} limit="150"/>
    <br/>
    <div style={{display:"inline",marginRight:"10px"}}>
   <Reply name={name} id={id} likes={likes} dislikes={dislikes} setLikes={setLikes} setDislikes={setDislikes}/>
    </div>
    </div>
    </div>
  </ListItem>
              ))}
            </List>
          </Paper>
    )
}
