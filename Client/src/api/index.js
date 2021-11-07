import axios from 'axios';


const url = "http://localhost:5000";

const API = axios.create({baseURL: "http://localhost:5000"});

API.interceptors.request.use((req)=>{
  
    if(localStorage.getItem('profile')){
      console.log('tokenspli1');
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;

    }
    console.log('tokenspli2');
    return req;
});

export const getVideos = (page)=>{
  return API.get(`/videos/fetch?page=${page}`)
}
export const likeVideo=(id)=>{
  console.log(`${url}/videos/${id}/like`)
  return API.patch(`/videos/${id}/like`)
}
export const viewVideo=(id)=>{
  return API.patch(`/videos/${id}/view`)
}
export const uploadVideos = (data)=>{
  return API.post(`/videos/add`,data)
}

export const SignIn = (data) => {
  return API.post(`/user/signin`, data)
}
export const SignUp = (data) => {
  return API.post(`/user/signup`, data)
}
export const getMessage = (_id) => {
  console.log(`${url}/message/${_id}`)
  return API.get(`/message/${_id}`)
}
export const addContact = (name, email, sender) => {
  console.log(`${url}/message`, name, email, sender)
  return API.post(`/message`, { name, email, sender })
}
export const postMessage = (_id, sender, reciever, message) => {
  console.log(_id, sender, reciever, message)
  return API.post(`/message/${_id}`, { sender: sender, reciever: reciever, message: message })
}
export const search = (data) => {
  return API.post(`/user/search`, { email: data })
}
export const getUser = (id) => API.get(`/user/${id}`)
export const notify = (data) => API.patch(`/user/notify`, { email: data })
export const editUser = (_id, qualifications, learning_skills, thrust_area, interest, known_languages, question_answered, taught_hours, experience, rates, name, mobile) => {
  console.log(`${url}/user/${_id}`)
  return API.patch(`/user/${_id}`, {
    qualifications: qualifications,
    learning_skills: learning_skills,
    thrust_area: thrust_area,
    interest: interest,
    known_languages: known_languages,
    question_answered: question_answered,
    taught_hours: taught_hours,
    experience: experience,
    rates: rates,
    name: name,
    mobile: mobile,
  })
}
// Ask Post Request
export const createPost = (data) => API.post('/askFeed/add', data);
export const getAskPosts = ()=> API.get('/askFeed/fetch');
export const deleteAskPost = (id)=>API.delete(`/askFeed/delete/${id}`);
export const updateAskPost = (id,updatePost)=>API.patch(`/askFeed/update/${id}`,updatePost);
export const updateAskLike = (id)=>API.patch(`/askFeed/${id}/like`);

//Ask Expert Request
export const getExpertPosts = ()=> API.get('/askExpert/fetch');
export const createExpPost = (data) => API.post('/askExpert/add', data);
export const deleteExpPost = (id)=>API.delete(`/askExpert/delete/${id}`);
export const updateExpPost = (id,updatePost)=>API.patch(`/askExpert/update/${id}`,updatePost);
export const updateExpLike = (id)=>API.patch(`/askExpert/${id}/like`);
export const updateExpTooLong = (id)=>API.patch(`/askExpert/${id}/too_long`);
export const updateExpOutOfKnowledge = (id)=>API.patch(`/askExpert/${id}/out_of_my_knowledge`);
export const updateExpIncompleteQuestion = (id)=>API.patch(`/askExpert/${id}/incomplete_question`);
export const updateExpIncorrectSubject = (id)=>API.patch(`/askExpert/${id}/incorrect_subject`);
export const updateExpOtherReason = (id)=>API.patch(`/askExpert/${id}/other_reason`);

//Communities
export const fetchCommunities =()=>API.get('/communities/fetch');

//Notes
export const uploadNotes = (data) => API.post('/notes/add', data);


// Authentication Request
export const Signin = (formData) => API.post('/user/signin', formData);
export const Signup = (formData) => API.post('/user/signup', formData);
