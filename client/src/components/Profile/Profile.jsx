import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './MyPost/MyPostContainer';

const Profile = function () {
  return (
    <div className={s.content}>
      <ProfileInfo />
      <MyPostContainer/>
    </div>
  );
};
export default Profile;
