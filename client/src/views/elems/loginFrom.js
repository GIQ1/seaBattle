import React, { useState } from "react";
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


function LoginForm({ setToken }){
 const [username,SetUsername] = useState();
 const [password,SetPassword] = useState();

 const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({username,password});
     setToken(token);
  }
       
    return (
        <div>
        <form  onSubmit={handleSubmit}>
            <legend>Введите имя</legend>
            <input onChange={e=>{SetUsername(e.target.value)}}></input>
            <legend>Введите пароль</legend>
            <input onChange={e=>{SetPassword(e.target.value)}}></input>
            <button>Подтвердить</button>
        </form>
        
        </div>
        )
}
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
  };
  export default LoginForm;