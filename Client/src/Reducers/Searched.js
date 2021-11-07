export default (searched={},action)=>{
    switch(action.type){
       case "SEARCHED":
           return action.payload
        default:
            return searched
    }
}