export default (table=[],action)=>{
    switch(action.type){
       case "time_table":
           return action.payload
        default:
            return table
    }
}