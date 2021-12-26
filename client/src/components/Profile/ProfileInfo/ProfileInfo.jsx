import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = function (props) {

  return (
    <div>
      <img src="https://smapse.ru/storage/2018/03/academy-img-1.jpg" />
      <div className={s.descriptionBlock}>{props.userProfile.id} + avatar</div>
    </div>
  );
};
export default ProfileInfo;
