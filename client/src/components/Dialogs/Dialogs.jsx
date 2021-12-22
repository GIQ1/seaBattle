import React from 'react';
import s from './Dialogs.module.css';

import { DialogsItem } from './DialogsItem/DialogsItem';
import { MessageItem } from './MessageItem/MessageItem';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'


const Dialogs = function (props) { 
  
  let dialogsElements = props.dialogsPage.dialogData.map((obj) => <DialogsItem id={obj.id} name={obj.name} />);
  let messagesElements = props.dialogsPage.messageItem.map((obj) => <MessageItem id={obj.id} content={obj.date} />);

  const newMessageElem = React.createRef();
  
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
        <textarea ref={newMessageElem} value={props.dialogsPage.messageText} onChange={()=>props.onChangeMessage(newMessageElem.current.value)} />
        <button onClick={() => props.addMessage()}>ADD</button>
      </div>
    </div>
  );
};
export default Dialogs;

