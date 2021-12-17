import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { MessageItem } from './MessageItem/MessageItem';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'

let addMessageActionCreator = () => {
  return {type:ADD_MESSAGE}

}
let updateNewMessageText = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

const Dialogs = function (props) {  

  let dialogsElements = props.dialogData.map((obj) => <DialogsItem id={obj.id} name={obj.name} />);
  let messagesElements = props.messageItem.map((obj) => <MessageItem id={obj.id} content={obj.date} />);

  const newMessageElem = React.createRef();

  const onChangeMessage = () => {
    props.dispatch(updateNewMessageText(newMessageElem.current.value))
  };
  
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
        <textarea ref={newMessageElem} value={props.messageText} onChange={onChangeMessage} />
        <button onClick={() => props.dispatch(addMessageActionCreator())}>ADD</button>
      </div>
    </div>
  );
};
export default Dialogs;
