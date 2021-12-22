import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';


let following = (id) =>{
    return { type: 'FOLLOWING',  id:id }
}

let setUsers = (users) =>{
    return { type: 'SET-USERS',  usersDate:users }
}


let mapStateToProps = (state) =>{
    return {
        usersDate: state.usersPage.usersDate,
    }
    }
    let mapDispatchToProps = (dispatch) =>{
      return {
          Follow: (id) => dispatch(following(id)),
          setUsers: (users) => dispatch(setUsers(users))
    }
    }
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;
