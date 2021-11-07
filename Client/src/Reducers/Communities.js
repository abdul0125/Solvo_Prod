import * as actionType from '../constants/actionTypes';


 const Communities = (state = { isLoading: true, communities: [] },action) => {

    switch (action.type) {
        
        case actionType.START_LOADING:
             return { ...state, isLoading: true };
        case actionType.END_LOADING:
             return { ...state, isLoading: false };
       
        case actionType.FETCH_COMMUNITIES:
            return {...state, communities: action.payload.communities.data};
         
        default:
            return state;
    }

 }

 export default  Communities;