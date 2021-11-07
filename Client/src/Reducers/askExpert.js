import * as actionType from '../constants/actionTypes';


 const askExpert = (state = { isLoading: true, posts: [] },action) => {

    switch (action.type) {
        
        // case actionType.CREATE:
        //     return [...posts, action.payload];
        case actionType.START_LOADING:
             return { ...state, isLoading: true };
        case actionType.END_LOADING:
             return { ...state, isLoading: false };
        case actionType.CREATE:
             return {...state, posts: [...state.posts, action.payload] };
        case actionType.FETCH_ALL:
             return {...state, posts: action.payload.posts.data};
        case actionType.LIKE:
             return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        
        case actionType.OUT_OF_KNOWLEDGE:
             return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }; 
        case actionType.INCOMPLETE_QUESTION:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }; 
        case actionType.INCORRECT_SUBJECT:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) }; 
        case actionType.OTHER_REASON:
            return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };  
        case actionType.UPDATE:
             return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
        case actionType.DELETE:
             return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };   
        default:
             return state;
    }

 }

 export default askExpert;