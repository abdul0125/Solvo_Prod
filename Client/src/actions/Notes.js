import * as actionType from '../constants/actionTypes';
import * as api from '../api/index.js';


 export const uploadNotes = (data) => async (dispatch)=>{
    try{

       const postData = await api.uploadNotes(data);
       console.log("action",postData);
       dispatch({ type: actionType.UPLOAD_NOTES , payload:postData});
       

       
    }catch(err){
   console.log(err);
    }
 }
