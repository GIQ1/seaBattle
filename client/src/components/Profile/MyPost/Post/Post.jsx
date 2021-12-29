import React from 'react';
import s from './Post.module.css';

const Post = function (props) {
  return (
    <div className={s.item} key={props.id}>
      {props.date}
    </div>
  );
};
export default Post;
