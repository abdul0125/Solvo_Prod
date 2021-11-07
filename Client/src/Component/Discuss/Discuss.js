import React from 'react';
import {Box,Typography,AppBar,Toolbar} from "@material-ui/core"
import Collapse from '@material-ui/core/Collapse';
import { getDiscuss } from '../../actions/actions';
import { useEffect } from 'react';
import Main from './Main';
import { useDispatch } from 'react-redux';
import CommentArea from './CommentArea';
export default function DiscussBox(props){
  const dispatch=useDispatch()
  useEffect(()=>
      dispatch(getDiscuss()),[dispatch])
    props=props.props
    return(
     <Collapse in={props}>
        <div style={{display:"block",margin:"1%"}}>
        <Box style={{display:"block",borderRadius:"7px",overflowX:"auto",overflow:"hidden",}}>
    <AppBar position="static" style={{borderRadius:"7px",overflow:"hidden",overflowX:"auto",maxWidth:"100%",}} color="inherit"  >
    <Toolbar style={{overflow:"hidden",overflowX:"auto",padding:"2px"}}>
    <Typography variant="h6" style={{marginLeft:"4px"}}>
      Discussions            
    </Typography>
    </Toolbar>
    </AppBar>
   <CommentArea style={{overflow:"hidden",overflowX:"auto"}}/>
   <Main style={{overflow:"hidden",overflowX:"auto"}}/>
    </Box>
    </div>
    </Collapse>
    
     
        );
}



