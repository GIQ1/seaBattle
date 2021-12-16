import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = function (props) {
  const posts = props.postDate.map((prop) => <Post number={prop.number} />);
  return (
    <div className={s.postBlock}>
      <div>
        <textarea />
        <button>ADD</button>
      </div>
      {posts}
    </div>
  );
};
export default MyPost;
