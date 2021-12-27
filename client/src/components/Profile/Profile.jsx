import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';


const Profile = function (props) {
  return (
    <div className={s.content}>
      <ProfileInfo userProfile = {props.userProfile}
      setStatus={props.setStatus}
      url={props.url}/>
      <MyPostContainer/>
    </div>
  );
};
export default Profile;
