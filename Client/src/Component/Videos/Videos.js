import React, { useRef, useEffect } from 'react';



import {Grid,Paper} from '@material-ui/core';

import Video from './Video/Video';
import PostForm from '../PostForm/PostForm';
import useStyles from './style';
import Sidebar from '../Sidebar/Sidebar';
import Paginate from '../Pagination_videos';
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
function useQuery() {
    return new URLSearchParams(useLocation().search);
  }
const Videos = ()=>{
    const classes = useStyles();
    const query = useQuery();
    const page = query.get('page') || 1;
   const posts = useSelector((state)=>{
    // console.log(state) 
    return state?.videos?.posts||false})
  //   (window).scroll(function() {
  //     if((window).scrollTop() + (window).height() > (document).height() - 100) {
  //         alert("near bottom!");
  //     }
  //  });
  
    const listInnerRef = useRef();
  
    const onScroll = () => {
      if (listInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
        console.log(scrollTop)
        if (scrollTop + clientHeight === scrollHeight) {
          // TO SOMETHING HERE
          alert('Reached bottom')
        }
      }
    }
   if (!posts.length)
   {
     return <>
   <Paginate page={page}/> 
   <CircularProgress/>
   </>
}
    return(

      <Grid container >
                <Grid item xs={4}>
                    <Sidebar  />
                </Grid>
                      
                <Grid className={classes.container} onScroll={() => onScroll()} ref={listInnerRef} container alignItems='stretch' spacing={3} xs={7}>
                    <Grid item xs={10} >
                      <PostForm />
                    </Grid>
                    {posts.map((post)=>
                        <Grid item xs={12}>
                            <Video post={post}/>

                        </Grid>)
                    }    <Grid item xs={12}>
                            
                            <Paginate page={page}/>             
                        </Grid>
                  
                </Grid>
                
      </Grid>


)

      
      // <Grid className={classes.container}  container alignItems='stretch' spacing={3}>
      //     <Grid item xs={12} sm={8}>
      //       <PostForm />
      //     </Grid>
      //         <Grid item xs={12} sm={8}>
      //             <Discussion />
      //             <Discussion />
                  

      //         </Grid>
        
      // </Grid>
    
    
 }

export default Videos;
