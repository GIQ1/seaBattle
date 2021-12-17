import React from 'react';
import s from './Profile.module.css';
import MyPost from './MyPost/MyPost';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = function (props) {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPost postDate={props.postDate} newPostText={props.newPostText} dispatch={props.dispatch}/>
    </div>
  );
};
export default Profile;
