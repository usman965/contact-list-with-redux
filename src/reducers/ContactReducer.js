const initState=[];
export const ContactReducer=(state=initState,action)=>{
    switch(action.type){
        case "ADD_CONTACT":
            return [...state,action.payload];
        case "DELETE_CONTACT":
            return state.filter((data,arr)=>data.id!=action.payload);
        case "UPDATE_CONTACT":
            const i= state.filter((data,arr)=>data.id!=action.payload.id);
            return [...i,action.payload]         
        default:         
        return state;
    }
}