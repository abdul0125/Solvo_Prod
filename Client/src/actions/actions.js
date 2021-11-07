import * as api from "../api/api.js"
import { notify } from "../api/index.js"

export const getComments=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchComments()
        dispatch({type:'FETCH_ALL_HINTS',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
export const createComment=(comment)=>async(dispatch)=>{
    try{
        const {data} = await api.createComment(comment)
        dispatch({type:'CREATE_HINTS',payload:data})
    }
    catch(error){
        console.log(error.message,)
    }
}
export const createDiscuss=(comment)=>async(dispatch)=>{
    try{
        const {data} = await api.createDiscuss(comment)
        dispatch({type:'CREATE_DISCUSSION',payload:data})
    }
    catch(error){
        console.log(error.message,)
    }
}
export const createDiscussReply=(comment)=>async(dispatch)=>{
    try{
        let {data} =await api.createDiscussRep(comment)
        data={comment:comment,data:data}
        console.log(data)
        dispatch({type:'CREATE_DISCUSSION_REPLY',payload:data})
    }
    catch(error){
        console.log(error.message,)
    }
}
export const deleteComment=(id)=>async(dispatch)=>{
    try{
        await api.deleteComment(id)
        dispatch({type:'DELETE_HINTS',payload:id})
    }
    catch(error){
        console.log(error.message)
    }
}
export const likeComment=(id,dislike,email,name)=>async(dispatch)=>{
    try{
       const {data} = await api.likeComment(id,dislike,email,name)
       dispatch({type:'LIKE',payload:data})
    }
    catch(error)
    {
        console.log(error.message)
    }
}

export const getDiscuss=()=>async(dispatch)=>{
    try{
        const {data}=await api.fetchDiscussion()
        dispatch({type:'FETCH_ALL_DISCUSSION',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}

export const deleteDiscuss=(id)=>async(dispatch)=>{
    try{
        await api.deleteDiscuss(id)
        dispatch({type:'DELETE_DISCUSS',payload:id})
    }
    catch(error){
        console.log(error.message)
    }
}
export const getAnswer=()=>async(dispatch)=>{
    try{
        const {data}=await api.getAnswer()
        dispatch({type:'FETCH_ALL_ANSWER',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
export const createAnswer=(comment)=>async(dispatch)=>{
    try{
        const {data} = await api.postAnswer(comment)
        dispatch({type:'CREATE_ANSWER',payload:data})
    }
    catch(error){
        console.log(error.message,)
    }
}
export const deleteAnswer=(id,dat)=>async(dispatch)=>{
    try{
        console.log(dat)
       const {data} = await api.deleteAnswer(id,dat)
        dispatch({type:'EDIT_ANSWER',payload:data})
    }
    catch(error){
        console.log(error.message)
    }
}
export const update_time_table=(id,dat)=>async(dispatch)=>{
    try {
        const {data}= await api.update_table(id,dat)
        dispatch({type:'time_table',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const get_time_table=(id)=>async(dispatch)=>{
    try {
        const {data}= await api.get_table(id)
        dispatch({type:'time_table',payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const book_time_table=(student,email,slot)=>async(dispatch)=>{
    try {
        const{data}=await api.book_table(student,email,slot)
        // console.log(data)
        dispatch({type:'BOOKING',payload:data})
        console.log("ho gya")
    } catch (error) {
        console.log(error.message)
    }
}