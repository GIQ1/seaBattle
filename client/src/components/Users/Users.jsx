import React from 'react';
import User from './User/User';
import s from './Users.module.css'

const Users = (props) => {
   
  let pages = [];
  for (let i = 1; i <= Math.ceil(props.totalUsersCount / props.pageSize); i++) pages.push(i)
  return (
    props.isLoading
    ? <img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'></img>
    :<>
        {pages.map(d => { return <span onClick={() => props.changeUser(d)} className={props.currentPage === d ? s.selected : s.item}>{d}</span> })}
        {props.usersDate.map(date => <User
          date={date}
          follow={props.followThunkCreator}
          isFollowing={props.isFollowing}
        />)}
    </>
)
}

export default Users;