export default (comments={hints:[],discussion:[],answer:[]},action)=>{
    switch(action.type){
        case "FETCH_ALL_HINTS":
            return {...comments,hints:action.payload}
        case "FETCH_ALL_DISCUSSION":
            return {...comments,discussion:action.payload}
        case "CREATE_DISCUSSION":
            return {...comments,discussion:[...comments.discussion,action.payload]}
        case "CREATE_HINTS":
            return {...comments,hints:[...comments.hints,action.payload]}
        case "DELETE_HINTS":
            return {...comments,hints:comments.hints.filter((comment)=>comment._id!==action.payload)}
        case "DELETE_DISCUSS":
            return {...comments,discussion:comments.discussion.filter((comment)=>comment._id!==action.payload)}
        case "LIKE":
            return {...comments,hints:comments.hints.map((comment)=>comment._id===action.payload._id?action.payload:comment)}
        case "FETCH_ALL_ANSWER":
            return{...comments,answer:action.payload}
        case "CREATE_ANSWER":
            return{...comments,answer:[...comments.answer,action.payload]}
        case "EDIT_ANSWER":
            return{...comments,answer:[action.payload]}
        case "CREATE_DISCUSSION_REPLY":
            const newDiscussion = comments.discussion.map((item)=>{
                if(action.payload.data===item._id)
                {
                    item.Replies.push({text:action.payload.comment.text,name:action.payload.comment.name,imageURl:action.payload.comment.imageURl,date:action.payload.comment.date})
                }
                return item
            })
            return {...comments,discussion:newDiscussion}
        default:
            return comments
    }
}