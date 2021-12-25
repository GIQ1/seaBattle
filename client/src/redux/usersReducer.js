import User from "../components/Users/User/User"

let initialState = {
    usersDate: [
     
    ],
    pageSize:10,
    totalUsersCount: 0,
    currentPage:1,
    isLoading:false
  }

const usersReducer = (state = initialState, action) =>{
    switch(action.type){
      case 'FOLLOWING':{
        let stateCopy={...state}
        stateCopy.usersDate = [...state.usersDate]
        stateCopy.usersDate.map(d => {if(d.id == action.id) d.followed=!d.followed })
        return stateCopy}
        case 'SET-USERS':{
          return {...state, usersDate: [...action.usersDate]}
      }
      case 'SET-PAGE':{
      return {...state, currentPage: action.currentPage}
      }
      case 'SET-TOTAL-COUNT':{
        return {...state, totalUsersCount: action.totalCount}
        }
        case 'TOGGLE-LOADING':{
          return {...state, isLoading:action.isLoading}
          }
    default: 
    return state
}
}

export default usersReducer