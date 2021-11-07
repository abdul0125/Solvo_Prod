import React ,{useState} from 'react';
// import {Typography} from "@material-ui/core"
import ReplyIcon from '@material-ui/icons/Reply';
import TextField from '@material-ui/core/TextField';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { Edit } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { deleteAnswer } from '../../actions/actions';

export default function Reply(props)
{
const  dispatch = useDispatch()

  
  
  return(
               
                <div style={{position:"absolute",right:"0",top:"5px"}}>
                  <Edit onClick={()=>{
                  console.log("calling")
                  
                  if(props.edit)
                   {dispatch(deleteAnswer(props.id._id,{...props.comment,date:Date()}))
          }props.props(!props.edit)
                  }
                  }/>
                </div>
          
  )
}
