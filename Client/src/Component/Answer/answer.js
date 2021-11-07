import React ,{useState} from 'react';
import {Button,Box,Typography,AppBar,Toolbar} from "@material-ui/core"
import Collapse from '@material-ui/core/Collapse';
import { getAnswer } from '../../actions/actions';
import { useEffect } from 'react';
import Main from './Main';
import { useDispatch } from 'react-redux';
import CommentArea from './CommentArea';
import { useSelector } from 'react-redux';
export default function Answer(props){
  const dispatch = useDispatch()
  const [answered,setAnswer]=useState(true)
  const [edit,setEdit]=useState(false)
  const [comment,setComment]=useState({name:'Naved',imageURl:'toadd',text:"",date:Date()})
  useEffect(()=>dispatch(getAnswer()),[dispatch])
    props=props.props
    return(
     <Collapse in={props} style={{width:"100%"}}>
        <div style={{display:"block",margin:"1%"}}>
        <Box style={{display:"block",borderRadius:"7px",overflowX:"auto",overflow:"hidden",width:"100%"}}>
    <AppBar position="static" style={{borderRadius:"7px",overflow:"hidden",overflowX:"auto",Width:"100%",}} color="inherit"  >
    <Toolbar style={{overflow:"hidden",overflowX:"auto",padding:"2px"}}>
    <Typography variant="h6" style={{marginLeft:"4px"}}>
      Answers            
    </Typography>
    </Toolbar>
    </AppBar>
   <CommentArea props={answered} edit={edit} setEdit={setEdit} comment={comment} setComment={setComment} />
   <Main props={setAnswer} edit={setEdit} editing={edit} comment={comment} setComment={setComment}/>
    </Box>
    </div>
    </Collapse>
    
     
        );
}



