import * as actionType from '../constants/actionTypes';
import * as api from '../api/index.js';



export const getPost = ()=> async (dispatch)=>{
    try{
      dispatch({ type:actionType.START_LOADING});
      const posts = await api.getExpertPosts();
      console.log("action Ex",posts);
      dispatch({type:actionType.FETCH_ALL, payload:{ posts: posts } });
      dispatch({ type:actionType.END_LOADING});
      
    }catch(err){
      console.log(err);
    }
 }

 export const createPost = (data,route) => async (dispatch)=>{
  try{

     const postData = await api.createExpPost(data);
     console.log("action",postData);
     dispatch({ type: actionType.CREATE , payload:postData});
     

     route.push('/post');
  }catch(err){
 console.log(err);
  }
}

export const updatePost = (id,post)=> async (dispatch)=>{
  try{
   const {data} = await api.updateExpPost(id,post);
   dispatch({type: actionType.UPDATE,payload:data})
  }catch(error){
      console.log(error);
  }
};

export const deletePost = (id)=> async (dispatch)=>{
  try{
    await api.deleteExpPost(id);
   dispatch({type:actionType.DELETE,payload:id})
  }catch(error){
      console.log(error);
  }
};

export const updateLike = (id)=> async (dispatch)=>{
  try{
    console.log("exlikeid",id);
    const {data} = await api.updateExpLike(id);
    dispatch({type:actionType.LIKE,payload:data})
    console.log("expost",data);
  }catch(e){
      console.log(e);
  }
}
export const updateTooLong = (id)=> async (dispatch)=>{
  try{
    
    const {data} = await api.updateExpTooLong(id);
    dispatch({type:actionType.TOO_LONG,payload:data})
    
  }catch(e){
      console.log(e);
  }
}

export const updateOutOfKnowledge = (id)=> async (dispatch)=>{
  try{
    
    const {data} = await api.updateExpOutOfKnowledge(id);
    dispatch({type:actionType.OUT_OF_KNOWLEDGE,payload:data})
    
  }catch(e){
      console.log(e);
  }
}
export const updateIncompleteQuestion = (id)=> async (dispatch)=>{
  try{
    
    const {data} = await api.updateExpIncompleteQuestion(id);
    dispatch({type:actionType.INCOMPLETE_QUESTION,payload:data})
    
  }catch(e){
      console.log(e);
  }
}
export const updateIncorrectSubject = (id)=> async (dispatch)=>{
  try{
    
    const {data} = await api.updateExpIncorrectSubject(id);
    dispatch({type:actionType.INCORRECT_SUBJECT,payload:data})
    
  }catch(e){
      console.log(e);
  }
}

export const updateOtherReason = (id)=> async (dispatch)=>{
  try{
    
    const {data} = await api.updateExpOtherReason(id);
    dispatch({type:actionType.OTHER_REASON,payload:data})
    
  }catch(e){
      console.log(e);
  }
}

