import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { MessageItem } from './MessageItem/MessageItem';

const Dialogs = function (props) {
  const dialogsElements = props.dialogData.map((obj) => <DialogsItem id={obj.id} name={obj.name} />);
  const messagesElements = props.messageItem.map((obj) => <MessageItem id={obj.id} content={obj.date} />);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsName}>
        {' '}
        Dialogs
        <div>

          {dialogsElements}
        </div>
      </div>
      <div className={s.messages}>
        {' '}
        Messages
        <div>
          {messagesElements}

        </div>
      </div>
    </div>
  );
};
export default Dialogs;
