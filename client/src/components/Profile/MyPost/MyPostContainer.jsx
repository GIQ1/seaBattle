import React from 'react';
import MyPost from './MyPost';
import { connect } from 'react-redux';


const ADD_POST = 'ADD-POST'

let addPostActionCreator = (data) => {
  return {type:ADD_POST,body:data}

}

let mapStateToProps = (state) =>{
  return {
    profilePage: state.profilePage,
  }
  }
  let mapDispatchToProps = (dispatch) =>{
    return {
      addPost: (data) =>{
        dispatch(addPostActionCreator(data))
      }
  }
  }
const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);
export default MyPostContainer;