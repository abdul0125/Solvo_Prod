import * as actionType from '../constants/actionTypes';


 const Notes = (state = { isLoading: true, notes: [] },action) => {

    switch (action.type) {
        
        case actionType.START_LOADING:
             return { ...state, isLoading: true };
        case actionType.END_LOADING:
             return { ...state, isLoading: false };
        case actionType.UPLOAD_NOTES:
            return {...state, notes: [...state.notes, action.payload] };
         
        default:
            return state;
    }

 }

 export default Notes;