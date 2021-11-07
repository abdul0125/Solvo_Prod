import {React,useState} from 'react';
import { Card, Grid, CardContent,CardHeader, CardMedia, Button, Typography,
    Avatar,ButtonGroup} from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import moment from 'moment';
import DiscussBox from '../../Discuss/Discuss';
// import {Link, useHistory, useLocation} from 'react-router-dom';
import '../../../stylesheets/Discussion.css';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from 'react-redux';
import { deletePost,updateLike,updateTooLong,updateOutOfKnowledge,updateIncompleteQuestion,updateIncorrectSubject,updateOtherReason } from '../../../actions/askExpert';

//import { useHistory } from 'react-router-dom';

//import { getPost, likePost, deletePost } from '../../../actions/posts';
import useStyles from './style';
import Answer from '../../Answer/answer';



const Discussion = (props) => {

  const dispatch = useDispatch();
  const classes = useStyles();
 const[discuss,setValue]=useState(false)
  const [answer,setAnswer] = useState(false)
  
 
  const [disp,setVal]=useState(false)

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const user  = JSON.parse(localStorage.getItem('profile'));

  const Likes = () => {
    if (props.post.likes?.length > 0) {
      return props.post.likes.find((like) => like === (user?.googleId || user?._id))
        ? (
          <><ThumbUpIcon fontSize="small" />&nbsp;{props.post.likes.length > 2 ?
             `You and ${props.post.likes.length - 1} others` : `${props.post.likes.length} like${props.post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{props.post.likes.length} {props.post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  

 

  return (
    <Card className={classes.card} raised elevation={3} style={{background:"rgba(255, 255, 255, 0.308)"}}>
      
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.post.creator?.charAt(0)}
          </Avatar>
        }
        action={
          <>
          <Grid container spacing={0} style={{transform:"translateX(1em)"}} > 
            <Grid >
            <Grid container  direction="column" className="subject_in_post">  
            <Typography variant="p" align="left" style={{color:'#261C2C',textTransform:"uppercase",fontWeight:"700",fontSize:"1.1em",borderBottom:"2px solid #2f4f4f",marginBottom:"0.3em"}}>{props.post.topic}</Typography>
          <Typography variant="p" style={{color:'#E0C097',letterSpacing:"2px",fontSize:"0.9em"}}>{!props.post.tags?null:props.post.tags.map((tag)=>`#${tag} `)}</Typography>
           </Grid>
          </Grid>
          <Grid item >
            <Button style={{color:'rgba(181, 19, 7)'}}><BookmarkBorderOutlinedIcon /></Button>
            </Grid>
            <Grid item >
            <Button
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenuClick}
        style={{color:'rgba(181, 19, 7)',borderRadius:"50%"}}
      >
        <MoreVertIcon />
      </Button>
           
      {(user?.name === props.post?.creator) && (
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
            
        <MenuItem onClick={handleMenuClose,()=>props.setCurrentId(props.post._id )}>Edit</MenuItem>
        <MenuItem onClick={handleMenuClose,() => dispatch(deletePost(props.post._id))}>Remove</MenuItem>
        
            
      </Menu>
      )}
            </Grid>
            </Grid>
           
          
              
           </>
          }
          
          
          title={props.post.creator}
          subheader={props.post.college}
          
          
        />
        <div className={classes.overlay}>
              
          <Typography variant='body2' color="textSecondary">{moment(props.post.createdAt).fromNow()}</Typography>             
            </div>

        <CardContent className={classes.details}>
        <Typography variant="body2"  component="p">
         {props.post.message}
        </Typography>
      </CardContent>
      {props.post?.selectedFile && <CardMedia className={classes.media} image={props.post?.selectedFile} title='title' />}
        
        
        
        
      
      <div className="post_footer_container">
        <div item xs={1}> 
        <Button  style={{color:'rgba(181, 19, 7)', marginLeft:'6px'}} disabled={!user} onClick={()=>dispatch(updateLike(props.post._id))}   >
         <Likes />
        </Button>
        </div>
        <div >
        <Button size="small" style={{color:'rgba(181, 19, 7)'}} onClick={()=>{setValue(!discuss)
          setAnswer(false)}}>
          <QuestionAnswerIcon />
        </Button>
        </div>
        
        <div>
         
        <Button variant="contained"  size="large" className="answer_btn" style={{color:'green'}} onClick={()=>{setAnswer(!answer)
        setValue(false)}}>Answer</Button>
        
        </div>

        <div>
        <ButtonGroup style={{ margin:'10px'}} className="btn_grp_in_post_footer" variant="contained" aria-label="outlined primary button group">
        
        <Button style={{color:'rgba(153, 44, 44)'}} className="btns_in_discussion_post" disabled={!user?.result} onClick={()=>dispatch(updateTooLong(props.post._id))} >
          Too Long{props.post.too_long?.length>0&&(<sup>{props.post.too_long.length}</sup>)}
           </Button>
        <Button style={{color:'rgba(153, 44, 44)'}} className="btns_in_discussion_post" disabled={!user?.result} onClick={()=>dispatch(updateOutOfKnowledge(props.post._id))}>
          Out of my knowledge{props.post.out_of_my_knowledge?.length>0&&(<sup>{props.post.out_of_my_knowledge.length}</sup>)}
          </Button>
        <Button style={{color:'rgba(153, 44, 44)'}} className="btns_in_discussion_post" disabled={!user?.result} onClick={()=>dispatch(updateIncompleteQuestion(props.post._id))}>
          Incomplete Question{props.post.incomplete_question?.length>0&&(<sup>{props.post.incomplete_question.length}</sup>)}
          </Button>
        <Button style={{color:'rgba(153, 44, 44)'}} className="btns_in_discussion_post" disabled={!user?.result} onClick={()=>dispatch(updateIncorrectSubject(props.post._id))}>
          Incorrect Subject{props.post.incorrect_subject?.length>0&&(<sup>{props.post.incorrect_subject.length}</sup>)}
          </Button>
        <Button style={{color:'rgba(153, 44, 44)'}} className="btns_in_discussion_post" disabled={!user?.result} onClick={()=>dispatch(updateOtherReason(props.post._id))}>
          Other reason{props.post.other_reason?.length>0&&(<sup>{props.post.other_reason.length}</sup>)}
          </Button>
        
      </ButtonGroup>
        </div>

        </div>
        <DiscussBox props={discuss}/>
        
        <Answer props={answer}/>

          
          
          
    </Card>

)
};

export default Discussion;
