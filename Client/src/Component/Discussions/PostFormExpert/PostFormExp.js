import React,{useEffect} from 'react';
import {AppBar,Select,Typography, Card,Avatar,Fab, Modal, Button,
    CardHeader,CardContent,CardMedia,TextField,Grid} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import  useStyles from './style';
import FileBase from 'react-file-base64';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import '../../../stylesheets/general.css';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {createPost, updatePost} from '../../../actions/askExpert';



const PostForm = (props)=> {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const [postData, setPostData] = React.useState({topic:'', message:'', 
  tags:'', selectedFile:''})
  const user = JSON.parse(localStorage.getItem('profile'));
  const handleOpen = () => {
    setOpen(true);
  };

  const post = useSelector((state)=>
(props.currentId?state.askExpert.posts.find((p)=>p._id===props.currentId):null));

  
  

  useEffect(()=>{
    if(post){
    setPostData(post);
    }
},[post]);
const clear = ()=>{
  props.setCurrentId(0);
  setPostData({title:'', message:'', tags:'', selectedFile:''});
};
  const handleClose = () => {
    setOpen(false);
  };
  const handleSubmit = (e) => {

     e.preventDefault();
 if(props.currentId===0){
    dispatch(createPost({...postData, creator: user?.name}, history ));
    clear(); 
  
 }else{
    dispatch(updatePost(props.currentId,postData));   
    clear();     
    
 }
 setOpen(false);
  }
  const body = (
    <Card className="post_form" style={{background:"white",width:"50%",position:"relative",top:"11%",left:"50%",transform:"translateX(-50%)"}}>
     <Typography  align="center" style={{fontWeight: 'bold'}} className="create_post">Create Post</Typography>
        <CardHeader
        
        avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {user.name.charAt(0)}
            </Avatar>
          }
          title={user?.name} />
          <CardContent className={classes.card_content}>
          <form autoComplete='off' noValidate className={`${classes.root_form} ${classes.form}`} onSubmit={handleSubmit}>
          <Grid container spacing={1} className="form_container">
            
                  <Grid item xs={6} className="form_input">
                <TextField name='topic' variant='outlined' label='Topic' fullWidth
                value={postData.topic} 
                onChange={(e)=>setPostData({...postData, topic: e.target.value})}  />
                  </Grid>
                  <Grid item xs={6} className="form_input">
                <TextField name='tags' variant='outlined' label='Tags' fullWidth
                value={postData.tags} 
                onChange={(e)=>setPostData({...postData, tags: e.target.value})}  />
                </Grid>
                <Grid item xs={12}>
                <TextField name='message' variant='outlined' label='Message' fullWidth multiline rows={4} 
                value={postData.message} 
                onChange={(e)=>setPostData({...postData, message: e.target.value})}  />
                </Grid>
                </Grid>
                
               
          
                
               <Grid item xs={12}> 
              <div >
             
            {/* <label htmlFor="contained-button-file">
            <Fab component="span" className={classes.imgupl,classes.button}> */}
            <FileBase
              accept="image/*"
              className={classes.input}
              id="contained-button-file"
              multiple={false}
              type="file"
              onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
            />
                {/* <AddPhotoAlternateIcon />
              </Fab>
            </label> */}
            </div>
            </Grid>

                <Button className={classes.buttonSubmit} variant='contained' color='secondary'
                 size='large' type="submit" fullWidth>Submit</Button>  
                    
            </form>
          </CardContent>
         
        
    </Card>
  );
  return (
    <div className={classes.root} style={{marginTop:"10px"}}>
      <Card className={classes.card} style={{background:"rgba(255, 255, 255, 0.308)"}} elevation={2}>
      <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <Avatar aria-label="recipe" className={classes.avatar}>
            {user?.name.charAt(0)}
          </Avatar>
          </IconButton>
         
          <Button  onClick={handleOpen} fullWidth className={classes.button} className="btn_in_posts"> 

          <div className={classes.search}>
          <InputBase
              value="Create your post"
              disabled
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
              
            />
            
          </div>
          
          <div>
          
            <label htmlFor="contained-button-file">
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateIcon />
              </Fab>
            </label>
          </div>
          </Button>  
        </Toolbar>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}



export default PostForm;