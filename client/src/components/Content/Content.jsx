import React from "react";
import s from './Content.module.css';
import MyPost from "./MyPost/MyPost";

const Header = () => {
  return <div className={s.content}>
    <img src="https://smapse.ru/storage/2018/03/academy-img-1.jpg"></img>

    <div>avatar</div>
    <MyPost />
  </div>

}
export default Header;