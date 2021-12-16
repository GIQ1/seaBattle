import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function (props) {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost postDate={props.postDate} addPost={props.addPost} newPostText={props.newPostText} updateNewPostText={props.updateNewPostText}/>
    </div>
  );
};
export default Profile;
