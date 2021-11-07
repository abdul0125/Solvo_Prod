import {React,useState} from 'react';
import { Card, Grid, CardContent,CardHeader, CardMedia, Button, Typography,
    IconButton,Avatar} from '@material-ui/core/';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import  MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import ShareIcon from '@material-ui/icons/Share';
// import InfoIcon from '@material-ui/icons/Info';
import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
//import { useDispatch } from 'react-redux';
import moment from 'moment';
// import {Link, useHistory, useLocation} from 'react-router-dom';
import CommentBox from '../../Comment/Comment_box';
import DiscussBox from '../../Discuss/Discuss';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { deletePost,updateLike } from '../../../actions/askFeed';



import { useSelector } from 'react-redux';
//import { useHistory } from 'react-router-dom';

//import { getPost, likePost, deletePost } from '../../../actions/posts';
import useStyles from './styles';


const Post = (props) => {

  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const [discuss,setValue] = useState(false)
 
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
      return props.post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpIcon fontSize="small" />&nbsp;{props.post.likes.length > 2 ?
             `You and ${props.post.likes.length - 1} others` : `${props.post.likes.length} like${props.post.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{props.post.likes.length} {props.post.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

 
   console.log( "postes",props.post);
 

  return (
    <Card className={classes.card} raised elevation={2} style={{background:"rgba(255, 255, 255, 0.308)"}} >
      
          <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar} >
            {props.post.creator?.charAt(0)}
          </Avatar>
        }
        action={
          <>
          <Grid container spacing={0} > 
            <Grid item >
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
           
      {(user?.result?.name === props.post?.creator) && (
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
       
        
        
        
        
        
      
      <Grid container alignItems='center'>
        <Grid item xs={2} md={1}> 
        <Button size="small" style={{color:'rgba(181, 19, 7)', marginLeft:'6px'}} disabled={!user?.result} onClick={()=>dispatch(updateLike(props.post._id))} >
          <Likes />
        </Button>
        </Grid>
        <Grid item xs={2} md={1}>
        <IconButton  aria-label="share"  style={{marginLeft:'10px',transform:"translateY(-2px)"}} onClick={()=>{setVal(!disp)
        setValue(false)}}>
          <WbIncandescentIcon style={{transform:"rotateZ(180deg)",color:"gold"}}/> <span style={{fontSize:"15px",transform:"translateY(2px)",marginLeft:"2px"}}>Hints</span>
        </IconButton>
        </Grid>
        <Grid item xs={2} md={1}>
        <Button  size="small" style={{color:'rgba(181, 19, 7)',marginLeft:'35px'}} onClick={()=>{setValue(!discuss)
          setVal(false)
        }} >
          <QuestionAnswerIcon /> <span style={{fontSize:"15px",transform:"translateY(2px)",marginLeft:"2px"}}>Discussion</span>
        </Button>
        </Grid>
        <Grid item xs={4} md={8} >

        </Grid>
      

        

        <Grid item  xs={2} md={1} style={{display:"flex",justifyContent:"flex-end",alignItems:"center"}}>
        <span style={{fontSize:"0.8em"}}>{props.post.community}</span>
        <IconButton aria-label="share" style={{color:'rgba(181, 19, 7)',}} justifyContent='flex-end'>
        <ShareIcon />
        </IconButton>
        </Grid>


          </Grid>
          <DiscussBox props={discuss}/>

          <CommentBox props={disp}/>

    </Card>

)
};

export default Post;
