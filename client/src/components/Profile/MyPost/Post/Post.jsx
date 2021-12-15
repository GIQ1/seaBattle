import React from "react";
import s from './Post.module.css';

const Post = (props) => {
    return <div className={s.item}>post {props.number}</div>

}
export default Post;