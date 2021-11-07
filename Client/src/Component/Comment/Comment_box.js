import {React,useState,useEffect}  from 'react';
import {Box,Typography,AppBar,Toolbar} from "@material-ui/core"
import Collapse from '@material-ui/core/Collapse';
import Main from './Main';
import { getComments } from '../../actions/actions';
import { useDispatch } from 'react-redux';
import CommentArea from './CommentArea';
export default function CommentBox(props){
props=props.props
const dispatch=useDispatch()
useEffect(()=>
  dispatch(getComments()),[dispatch])
const[likes,setLikes] = useState(0)
const[dislikes,setDislikes]=useState(0)
    return(
    <Collapse in={props}>
    <div style={{margin:"1%"}}> 
    <Box style={{display:"block",border:"0px solid black",borderRadius:"7px",overflowX:"auto",overflow:"hidden"}}>
    <AppBar position="static" style={{borderRadius:"7px",overflow:"hidden",overflowX:"auto",maxWidth:"100%"}} color="inherit"  >
    <Toolbar style={{overflow:"hidden",overflowX:"auto",padding:"2px"}}>
    <Typography variant="h6" style={{marginLeft:"4px"}}>
      Hints           
    </Typography>
    </Toolbar>
    </AppBar>
   <CommentArea style={{overflow:"hidden",overflowX:"auto"}} likes={likes} dislikes={dislikes} setLikes={setLikes} setDislikes={setDislikes}/>
   <Main style={{overflow:"hidden",overflowX:"auto"}} likes={likes} dislikes={dislikes} setLikes={setLikes} setDislikes={setDislikes}/>
    </Box>
     </div>
     </Collapse>
     
        );
}



