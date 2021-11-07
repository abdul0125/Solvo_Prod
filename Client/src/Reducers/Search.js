export default (search=[],action)=>{
    switch(action.type){
       case "SEARCH":
           if(action.payload)
           return action.payload
           else
           return search
        default:
            return search
    }
}