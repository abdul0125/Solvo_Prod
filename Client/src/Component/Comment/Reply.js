import React ,{useState} from 'react';
import {Typography} from "@material-ui/core"
// import ReplyIcon from '@material-ui/icons/Reply';
// import TextField from '@material-ui/core/TextField';
// import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
// import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Delete } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteComment,likeComment } from '../../actions/actions';

export default function Reply({id,name})
{
  const dispatch = useDispatch()
  
  return(<div>
                <div style={{display:"inline-flex",position:"relative",width:"100%"}}>
                <Typography style={{marginRight:"6px"}}>{id.likes}</Typography>
                <ThumbUpAltIcon style={{marginRight:"6px"}} onClick={()=>dispatch(likeComment(id._id,false,id.email,name))} />
                <Typography style={{marginRight:"6px"}}>{id.dislikes}</Typography>
                <ThumbDownIcon style={{marginRight:"6px"}} onClick={()=>dispatch(likeComment(id._id,true,id.email,name))}/>
                
                
                <div style={{position:"absolute",right:"0"}}><Delete onClick={()=>dispatch(deleteComment(id._id))}/></div>
               </div>
      </div>
  )
}
