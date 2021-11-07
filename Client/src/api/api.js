import axios from'axios'

const url='http://localhost:5000/'

const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req)=>{
    
    if(localStorage.getItem('profile')){
        console.log('tokenspl1');
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    console.log('tokenspl2');
    return req;
});

export const fetchComments = ()=> {
   
    return API.get('/post')}

export const update_table=(id,data)=>{
    console.log(`/slot`)
    return API.post(`/slot`,{userid:id,days:data})
}
export const get_table=(id)=>{
    console.log(`${url}slot`)
    return API.post(`/slot/gettable`,{userid:id})
}
export const book_table=(student,email,slot)=>{
    console.log(`${url}slot`)
    return API.patch(`/slot/book`,{email:email,student:student,slot:slot})
}

export const createComment = (comments)=>API.post('/post',comments)

export const deleteComment = (id) =>{
  
    return API.delete(`/post/${id}`)
}
export const likeComment = (id,dislike,email,name) =>{
    return API.patch(`/post/${id}`,{dislike:dislike,email:email,name:name})
}
// const discuss = `discuss`

export const fetchDiscussion=()=>{
   return API.get('/post/discuss')
}
export const  createDiscuss =(Discuss)=>{
    // console.log(discuss)
    return API.post('/post/discuss',Discuss)}
export const  createDiscussRep=(Discuss)=>{
return API.post(`/post/discuss/reply`,Discuss)}

export const deleteDiscuss = (id) =>{
    // console.log(`${discuss}/${id}`)
    return API.delete(`/post/discuss/${id}`)
}
//  const answer = `${url}answer`

 export const getAnswer = ()=> API.get('/answer')

 export const postAnswer=(data)=>API.post('/answer',data)

 export const deleteAnswer=(id,data)=>{
    console.log(id) 
    return API.patch(`/answer/${id}`,data)}

// export const
