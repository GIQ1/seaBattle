import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const MyPost = function (props) {
  const newPostElem = React.createRef();

  const posts = props.postDate.map((prop) => <Post number={prop.number} />);

  
 let onPostChange = () =>{
props.updateNewPostText(newPostElem.current.value);
}

  
  return (
    <div className={s.postBlock}>
      <div>
        <textarea ref={newPostElem} value={props.newPostText} onChange={onPostChange}/>
        <button onClick={() => props.addPost()}>ADD</button>
      </div>
      {posts}
    </div>
  );
};
export default MyPost;
