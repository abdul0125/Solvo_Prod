export default (state={posts:[]},action)=>{
    switch(action.type){
       case "GET_VIDEOS":
           console.log(action.payload,state.posts)
            return {
                ...state,
                posts:action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case "UPLOAD_VIDEOS":
            console.log(action.payload)
            return {...state,posts:state.posts.concat(action.payload.data)}
        case "LIKE_VIDEO":
            console.log("Liked video")
            return {...state,posts:state.posts.map((post)=>{
                if(post._id===action.payload.id)
               {
                const index = post.likes.findIndex((id)=> id===action.payload.email);
                if(index === -1){
                  post.likes.push(action.payload.email)
                } 
                else 
                post.likes.splice(index,1)
                }
                return post
            })}
        case "VIEW_VIDEO":
            console.log("View video")
            return {...state,posts:state.posts.map((post)=>{
                if(post._id===action.payload.id)
               {
                const index = post.views.findIndex((id)=> id===action.payload.email);
                if(index === -1){
                  post.views.push(action.payload.email)
                } 
                }
                return post
            })}

        default:
            return state
    }
}