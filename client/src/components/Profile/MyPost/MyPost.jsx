import React from 'react';
import s from './MyPost.module.css';
import Post from './Post/Post';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let addPostActionCreator = () => {
  return {type:ADD_POST}

}
let updateNewPostText = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

const MyPost = function (props) {

  const newPostElem = React.createRef();

  const posts = props.postDate.map((prop) => <Post number={prop.number} />);

  const onPostChange = () => {
   
    props.dispatch(updateNewPostText(newPostElem.current.value))
  };

  return (
    <div className={s.postBlock}>
      <div>
        <textarea ref={newPostElem} value={props.newPostText} onChange={onPostChange} />
        <button onClick={() => props.dispatch(addPostActionCreator())}>ADD</button>
      </div>
      {posts}
    </div>
  );
};
export default MyPost;
