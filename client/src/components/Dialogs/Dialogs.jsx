import React from 'react';
import { updateNewMessageText } from '../../redux/state';
import s from './Dialogs.module.css';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { MessageItem } from './MessageItem/MessageItem';

const Dialogs = function (props) {
  const newMessageElem = React.createRef();
  const dialogsElements = props.dialogData.map((obj) => <DialogsItem id={obj.id} name={obj.name} />);
  const messagesElements = props.messageItem.map((obj) => <MessageItem id={obj.id} content={obj.date} />);

 let onChangeMessage = () =>{
 updateNewMessageText(newMessageElem.current.value);
 }

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
        <textarea ref={newMessageElem} value={props.messageText} onChange={onChangeMessage}/>
        <button onClick={props.addMessage} >ADD</button>
      </div>
    </div>
  );
};
export default Dialogs;
