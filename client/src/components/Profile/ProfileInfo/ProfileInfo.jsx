import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = function (props) {
  return (
    <>
      <img src="https://smapse.ru/storage/2018/03/academy-img-1.jpg" />
      <ProfileStatus userStatus={props.userProfile.status} setStatus={props.setStatus} url={props.url}/>
      <div className={s.descriptionBlock}>{props.userProfile.id} + avatar</div>
    </>
  );
};
export default ProfileInfo;
