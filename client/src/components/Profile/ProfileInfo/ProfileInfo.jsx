import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = function (props) {
  if(!props.userProfile){
    return <img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'></img>
  }
  return (
    <div>
      <img src="https://smapse.ru/storage/2018/03/academy-img-1.jpg" />
      <div className={s.descriptionBlock}>{props.userProfile.id} + avatar</div>
    </div>
  );
};
export default ProfileInfo;
