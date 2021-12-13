import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(data => data.json())
   }


function LoginForm(props){
  console.log(props);
 const [username,setUsername] = useState();
 const [password,setPassword] = useState();
 const [message,setMessage] = useState();

 const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({username,password});
    if(token.token!==null){
      props(token);
    }else
      setMessage(token.response)
 
    
  }
       
    return (
        <div>
        <form  onSubmit={handleSubmit}>
            <legend>Введите имя</legend>
            <input onChange={e=>{setUsername(e.target.value)}}></input>
            <legend>Введите пароль</legend>
            <input onChange={e=>{setPassword(e.target.value)}}></input>
            <button>Подтвердить</button>
            
        </form>
        <div>{message}</div>
        </div>
        )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  };
  export default LoginForm;