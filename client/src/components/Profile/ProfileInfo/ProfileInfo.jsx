import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = function () {
  return (
    <div>
      <img src="https://smapse.ru/storage/2018/03/academy-img-1.jpg" />
      <div className={s.descriptionBlock}>avatar</div>
    </div>
  );
};
export default ProfileInfo;
