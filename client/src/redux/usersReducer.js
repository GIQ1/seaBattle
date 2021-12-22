import User from "../components/Users/User/User"

let initialState = {
    usersDate: [
     
    ] 
  }

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
      case 'FOLLOWING':{
        let stateCopy={...state}
        stateCopy.usersDate = [...state.usersDate]
        stateCopy.usersDate.map(d => {if(d.id == action.id) d.followed=!d.followed })
        return stateCopy}
        case 'SET-USERS':{
          return {...state, usersDate: [...state.usersDate, ...action.usersDate]}
      }
    default: 
    return state
}
}

export default usersReducer