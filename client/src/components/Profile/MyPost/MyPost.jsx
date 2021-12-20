import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';


const MyPost = function (props) {
  const posts = props.profilePage.postDate.map((prop) => <Post date={prop.date} />);
  const newPostElem = React.createRef();
  return (
    <div className={s.postBlock}>
      <div>
        <textarea ref={newPostElem} value={props.profilePage.newPostText} onChange={() => props.onPostChange(newPostElem.current.value)} />
        <button onClick={() => props.addPost()}>ADD</button>
      </div>
      {posts}
    </div>
  );
};
export default MyPost;



