import React from 'react';
import User from './User/User';
import s from './Users.module.css'

const Users = (props) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {

    pages.push(i);
  }
  return (
    <>
      {props.isLoading ? <img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'></img> : <div>
        {pages.map(d => { return <span onClick={() => props.changeUser(d)} className={props.currentPage === d ? s.selected : s.item}>{d}</span> })}
        {props.usersDate.map(date => <User
          date={date}
          follow={props.followThunkCreator}
          isFollowing={props.isFollowing}
        />)}
      </div>}
    </>);
}

export default Users;