const initialState ={
     isAdmin:false
}

export const reducer=(state=initialState,action)=>
{
     newState={...state}
     switch(action.type)
     {
     case 'IS_ADMIN':
     return newState{isAdmine:true}   
     case 'IS_NOT_ADMIN':
     return {isAdmin:false} 
     default:
    return  {state}
     }

     return state.isAdmin;
}

export default reducer;