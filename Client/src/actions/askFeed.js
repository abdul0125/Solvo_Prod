import * as actionType from '../constants/actionTypes';
import * as api from '../api/index.js';


 export const createPost = (data,route) => async (dispatch)=>{
    try{

       const postData = await api.createPost(data);
       console.log("action",postData);
       dispatch({ type: actionType.CREATE , payload:postData});
       

       route.push('/post');
    }catch(err){
   console.log(err);
    }
 }


 export const getPost = ()=> async (dispatch)=>{
    try{
      dispatch({ type:actionType.START_LOADING});
      const posts = await api.getAskPosts();
      console.log("ask",posts);
      dispatch({type:actionType.FETCH_ALL, payload:{ posts: posts } });
      dispatch({ type:actionType.END_LOADING});
      
    }catch(err){
      console.log(err);
    }
 }

 export const updatePost = (id,post)=> async (dispatch)=>{
   try{
    const {data} = await api.updateAskPost(id,post);
    dispatch({type: actionType.UPDATE,payload:data})
   }catch(error){
       console.log(error);
   }
};

export const deletePost = (id)=> async (dispatch)=>{
   try{
     await api.deleteAskPost(id);
    dispatch({type:actionType.DELETE,payload:id})
   }catch(error){
       console.log(error);
   }
};

export const updateLike = (id)=> async (dispatch)=>{
   try{
     const {data} = await api.updateAskLike(id);
     dispatch({type:actionType.LIKE,payload:data})
   }catch(e){
       console.log(e);
   }
}