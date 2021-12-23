import React from 'react';
import User from '../User/User';
import * as axios from 'axios'

const Users = (props) =>{
  let getUsers = () =>{
    if (props.usersDate.length == 0)
    axios.get("/users").then(res =>{
      props.setUsers(res.data);
  });
  }

    let users = props.usersDate.map(date => <User date={date} follow={props.Follow}/>);

    return (<> <button onClick={()=>{getUsers()}}>GET USERS</button> {users} </> );
}

export default Users;