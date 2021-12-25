import React from 'react';
import User from './User/User';
import s from './Users.module.css'

const Users = (props) =>{
  let pagesCount = Math.ceil(props.totalUsersCount/props.pageSize);
  let pages=[];
   for(let i=1;i<=pagesCount;i++){
    
     pages.push(i);
   }
    let users = props.usersDate.map(date => <User date={date} follow={props.Follow}/>);
    return ( <>
      <div>
      {pages.map(d => {return <span onClick={()=> props.changeUser(d)} className={props.currentPage === d ? s.selected: s.item}>{d}</span>})}
      </div>
          {props.usersDate.map(date => <User date={date} follow={props.Follow}/>)}
          </>);
}

export default Users;