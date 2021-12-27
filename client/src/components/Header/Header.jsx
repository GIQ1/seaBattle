import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';
import { disauthThunkCreator } from '../../redux/authReducer'
import { connect } from 'react-redux';

const Header = function (props) {
  return <header className={s.header}>HEADER {props.isAuth ? <> {props.login} <button onClick={() =>props.disauthThunkCreator()}> logout</button></> : <Link to='/login'>Login</Link>}</header>
};


let mapStateToProps = (state) =>{
  return {
    isAuth:state.authReducer.isAuth,
    login:state.authReducer.login
  }
}
 const HeaderContainer = connect(mapStateToProps, {disauthThunkCreator})(Header)



export default HeaderContainer