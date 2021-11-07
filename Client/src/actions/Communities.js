import * as actionType from '../constants/actionTypes';
import * as api from '../api/index.js';



export const getCommunities = ()=> async (dispatch)=>{
    try{
      dispatch({ type:actionType.START_LOADING});
      const communities = await api.fetchCommunities();
      console.log("communities",communities);
      dispatch({type:actionType.FETCH_COMMUNITIES, payload:{ communities: communities } });
      dispatch({ type:actionType.END_LOADING});
      
    }catch(err){
      console.log(err);
    }
 }