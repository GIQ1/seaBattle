import React from 'react';
import { connect } from 'react-redux';
import Users from './UsersC';


let following = (id) =>{
    return { type: 'FOLLOWING',  id:id }
}

let setUsers = (users) =>{
    return { type: 'SET-USERS',  usersDate:users }
}
let setCurrentPage = (page) =>{
    return { type: 'SET-PAGE',  currentPage: page }
}
let setTotalPageCount = (count) =>{
    return { type: 'SET-TOTAL-COUNT',  totalCount: count }
}


let mapStateToProps = (state) =>{
    return {
        usersDate: state.usersPage.usersDate,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage
    }
    }
    let mapDispatchToProps = (dispatch) =>{
      return {
          Follow: (id) => dispatch(following(id)),
          setUsers: (users) => dispatch(setUsers(users)),
          setCurrentPage: (page) => dispatch(setCurrentPage(page)),
          setTotalPageCount: (count) => dispatch(setTotalPageCount(count))
    }
    }
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
