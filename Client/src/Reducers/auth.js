// import * as actionType from '../constants/actionTypes';
import { SET_CURRENT_USER } from '../actions/types';
import { GET_ERRORS } from '../actions/types';

const UserData = (state = { authData: null, }, action) => {
  // console.log(action)
  switch (action.type) {
   
    
    case "SIGN_UP":
      localStorage.setItem('profile',JSON.stringify({ ...action?.payload}));
      console.log('prof',action?.payload)
      return action.payload
      
    case "BOOKING":
        console.log(action.payload)
        return {...state,Notifications:action.payload}
    
    case "SIGN_IN":
      localStorage.setItem('profile',JSON.stringify({ ...action?.payload}));
      return action.payload

    case GET_ERRORS:
      return action.payload;

    case SET_CURRENT_USER:
        return action.payload

    case "GET_USER":
      if(action.payload)
      return action.payload
      return state

    case "FETCH_ALL_MESSAGES":
      return action.payload
    
    case "POST_MESSAGE":
      return {...state,contacts:action.payload}
    case "ADD_CONTACT":
      return {...state,contacts:action.payload}

    case "EDIT_USER":
      console.log({
        ...state,qualifications: action.payload.qualifications,
         learning_skills: action.payload.learning_skills,
         thrust_area:action.payload.thrust_area,
         interest:action.payload.interest,
         known_languages:action.payload.known_languages,
         question_answered:action.payload.question_answered,
         taught_hours:action.payload.taught_hours,
         experience:action.payload.experience,
         rates:action.payload.rates
      }
      )
  
      return {...state,qualifications: action.payload.qualifications,
         learning_skills: action.payload.learning_skills,
         thrust_area:action.payload.thrust_area,
         interest:action.payload.interest,
         known_languages:action.payload.known_languages,
         question_answered:action.payload.question_answered,
         taught_hours:action.payload.taught_hours,
         experience:action.payload.experience,
         rates:action.payload.rates,
         name:action.payload.name,
         mobile:action.payload.mobile
        }

    default:
      return state;
  }
};

export default UserData;
