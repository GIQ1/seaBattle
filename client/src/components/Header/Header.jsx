import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = function (props) {
  return <header className={s.header}>HEADER {props.isAuth ? props.name : <Link to='/login' onClick={() => props.auth()}>Login</Link>}</header>
};

export default Header;
