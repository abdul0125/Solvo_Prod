// import { AUTH } from '../constants/actionTypes';
import { GET_ERRORS, SET_CURRENT_USER } from './types';
import {SignIn,SignUp,getUser,editUser,search} from '../api/index.js';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
// import { useHistory } from 'react-router';
export const signin = (formData,history) => async (dispatch) => {
  
  SignIn(formData)
  .then(res => {    
    const  {result,token}  = res.data;

    console.log("resu",result)
     localStorage.setItem('profile',JSON.stringify({...result, token}));

    console.log(res.data)
     localStorage.setItem("token",token);
     localStorage.getItem("token");
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded)
      dispatch({
        type: SET_CURRENT_USER,
        payload: result
      });
      console.log("pushing")
        history.push('/post');
   })
  .catch(err => {
    console.log(err);
  });

};
// export const update = (formData) => async (dispatch) => {
//   const {data}=update(formData)
  
// };
export const Search_user=(dataa)=>async(dispatch)=>{
  const {data} = await search(dataa)
  console.log(data)
  dispatch({type:"SEARCHED",payload:data})
}
export const signup = (formData,history) => async (dispatch) => {
  SignUp(formData)
  .then(res => {
    const  {result,token} = res.data;

     console.log("resu",result)
     localStorage.setItem('profile',JSON.stringify({...result, token}));
     localStorage.setItem("token",token);
     
     localStorage.getItem("token");
      setAuthToken(token);
      const decoded = jwt_decode(token);
      console.log(decoded)
      dispatch({
        type: SET_CURRENT_USER,
        payload: result
       });
       history.push('/post');
  })
  .catch(err => {
    console.log(err);
  });
};
export const getData = (_id)=>async(dispatch)=>{
  const {data} = await getUser(_id)
  console.log(data)
  
  dispatch({
    type:"GET_USER",
    payload:data.data
  })

  dispatch({
    type:"SEARCH",
    payload:data.search
  })
}

export const edituser = (_id,name,mobile,qualifications,learning_skills,thrust_area,interest,known_languages,question_answered,taught_hours,experience,rates) => async (dispatch) => {
  console.log("send")
  dispatch({
    type:"EDIT_USER",
    payload: {
      qualifications: qualifications,
       learning_skills: learning_skills,
       thrust_area:thrust_area,
       interest:interest,
       known_languages:known_languages,
       question_answered:question_answered,
       taught_hours:taught_hours,
       experience:experience,
       rates:rates,
       name:name,
       mobile: mobile,
    }  
  })  
  const {data} = await editUser(_id,qualifications,learning_skills,thrust_area,interest,known_languages,question_answered,taught_hours,experience,rates,name,mobile);
  
   
}
