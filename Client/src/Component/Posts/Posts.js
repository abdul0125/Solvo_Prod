import React,{useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Grid,CircularProgress} from '@material-ui/core';
import Post from './Post/Post';
import PostForm from '../PostForm/PostForm';
import useStyles from '../Comment/style';
import {getPost} from '../../actions/askFeed';






const Posts = (props)=>{

   
    const classes = useStyles();
  
    const user  = JSON.parse(localStorage.getItem('profile'));
   
    //dispatch(getPost());
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getPost());
     },[props.currentId,dispatch]);

    const {posts, isLoading} = useSelector((state)=>state.askFeed);

    console.log("ask",posts, isLoading);

   


    return(     
      <div>
       <PostForm currentId={props.currentId} setCurrentId={props.setCurrentId}/>
       {/* <Post setCurrentId={setCurrentId} /> */}
       {isLoading ? <CircularProgress />:( posts.map((post)=>(
          <div key={post._id}>
            <Post post={post} setCurrentId={props.setCurrentId}/>
          </div>
    )))}

      </div>
    )
    
 }

export default Posts;
