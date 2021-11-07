import { getVideos,uploadVideos } from "../api";

export const getAllVideo=(page)=>async(dispatch)=>{
    
try{
        const {data} = await getVideos(page)
        console.log(data)
        dispatch({type:"GET_VIDEOS",payload:data})
}
catch(error)
{
    console.log(error)
}
}
export const uploadVideo=(post)=>async(dispatch)=>{
    
    try{
            const {data} = await uploadVideos(post)
            dispatch({type:"UPLOAD_VIDEOS",payload:data})
    }
    catch(error)
    {
        console.log(error)
    }
    }