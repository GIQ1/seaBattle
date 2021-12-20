import React from 'react';
import MyPost from './MyPost';
import { connect } from 'react-redux';
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let addPostActionCreator = () => {
  return {type:ADD_POST}

}
let updateNewPostText = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

let mapStateToProps = (state) =>{
  return {
    profilePage: state.profilePage,
  }
  }
  let mapDispatchToProps = (dispatch) =>{
    return {
      onPostChange: (body) =>{
        dispatch(updateNewPostText(body))
      },
      addPost: () =>{
        dispatch(addPostActionCreator())
      }
  }
  }
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;