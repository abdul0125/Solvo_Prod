import React,{useEffect,useState} from 'react';
import Discussion from './Discussion/Discussion';
import {useDispatch,useSelector} from 'react-redux';
import PostForm from './PostFormExpert/PostFormExp'
import {Grid,CircularProgress} from '@material-ui/core';

import useStyles from './style';
import Sidebar from '../Sidebar/Sidebar';
import '../../stylesheets/Discussion.css';
import {getPost} from '../../actions/askExpert';


const Discussions = ()=>{
    const classes = useStyles();
    const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

    useEffect(()=>{
      dispatch(getPost());
     },[currentId,dispatch]);

     const {posts,isLoading} = useSelector((state)=>state.askExpert);
     console.log("psEx",posts, isLoading);
    
    return(


      <div className="ask_expert_container">
                <div className="sidebar_container">
                <Sidebar />
                </div>
                      
                <div className="posts_container">
                    <div>
                      <PostForm currentId={currentId} setCurrentId={setCurrentId}/>
                    </div>
            {isLoading ? <CircularProgress />:( posts.map((post)=>(
          <div key={post._id}>
            <Discussion post={post} setCurrentId={setCurrentId}/>
          </div>
                  
            )))}   
            </div>    
      </div>
        

    )
    
 }

export default Discussions;
