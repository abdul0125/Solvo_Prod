import {React} from "react"
import Reply from './Reply';
import LongText from './Text';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { Typography } from '@material-ui/core';
import Image from "../Comment/naved.jpg"
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import { getComments } from "../../actions/actions";
import { CircularProgress } from "@material-ui/core";
import { deleteDiscuss } from "../../actions/actions";
import {Delete} from "@material-ui/icons"
export default function Main(props)
{
  const[edited,setEdited]=useState(false)
  
   const data= useSelector((state)=>{

    return state.comments.answer})
   
   if(!data.length)
   {
     return(<Paper square style={{padding:"50"}}><Typography variant="h5">Be the first to Discuss</Typography></Paper>)}
    else{
      props.props(false)
    }
  
    return(
      
        <Paper square style={{padding:"50"}}>
        <List style={ {marginBottom: "2"}}>
              {data.map((id) => (
                <ListItem button style={{overflow:"hidden",overflowX:"auto",display:"block"}}>
    <div style={{}}>
    <div style={{height:"49px",position:"relative"}}>
    <Reply id={id} setEdited={setEdited}props={props.edit} edit={props.editing} comment={props.comment} setComment={props.setComment}/>
    <ListItemAvatar style={{position:"absolute",top:"8px",display:"inline"}}>
    <div style={{display:"inline"}}>
    <Avatar  src={Image} />
    </div>
    <div style={{display:"block",position:"absolute",top:"-2px",left:"47px",width:"max-content"}}>
    <Typography variant="h4" style={{fontSize:"1.8rem"}}>{id.name}</Typography>
    <Typography variant="subtitle2" >{moment(id.date).fromNow()}{id.edited?"(edited)":""}</Typography>
    </div>
    
    </ListItemAvatar>
    </div>
    <div style={{marginTop:"15px"}}>
    <LongText content={id.text} edit={props.editing} setComment={props.setComment} comment={props.comment}limit="150"/>
    <br/>
    </div>
    </div>
  </ListItem>
              ))}
            </List>
          </Paper>
    )
}
