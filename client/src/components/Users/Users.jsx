import React from 'react';
import User from './User/User';
import * as axios from 'axios'

const Users = (props) =>{
  let getUsers = () =>{
    if (props.usersDate.length == 0)
<<<<<<< Updated upstream
    props.setUsers(
    [
        { 
           id: 1, 
           name: {first: 'first 1', second: 'second 1'}, 
           status: 'stat 1', 
           place:{
            country:"Country 1",
            sity:"Sity 1"
           },
           followed: false,},
         { 
           id: 2, 
           name: {first: 'first 2', second: 'second 2'}, 
           status: 'stat 2', 
           place:{
            country:"Country 2",
            sity:"Sity 2"
           },
           followed: false,
         },
         { 
           id: 3, 
           name: {first: 'first 3', second: 'second 3'}, 
           status: 'stat 3', 
           place:{
            country:"Country 3",
            sity:"Sity 3"
           },
           followed: false,
    }])

    let users = props.usersDate.map(date => <User date={date} follow={props.Follow}/>)
    
    return ( users )
=======
    axios.get("/users").then(res =>{
        props.setUsers(res.data);
    })
  }
 
   

    let users = props.usersDate.map(date => <User date={date} follow={props.Follow}/>)

    return (<> <button onClick={()=>{ getUsers();}}>GET USERS</button> {users} </> )
>>>>>>> Stashed changes
}



export default Users;