import React from 'react';
import s from './Dialogs.module.css';
import {Field,reduxForm} from 'redux-form';
import { DialogsItem } from './DialogsItem/DialogsItem';
import { MessageItem } from './MessageItem/MessageItem';
import { Textarea } from '../../common/FormsControls';
import { maxLengthCreator, requiredField } from '../utils/validators/validators';

const maxLength50 = maxLengthCreator(50)

const Dialogs = function (props) {


  let dialogsElements = props.dialogsPage.dialogData.map((obj) => <DialogsItem id={obj.id} name={obj.name} />);
  let messagesElements = props.dialogsPage.messageItem.map((obj) => <MessageItem id={obj.id} content={obj.date} />);

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
        <form onSubmit={props.handleSubmit}>
         <Field  component={Textarea} 
         validate={[requiredField, maxLength50]}
         placeholder={'message'} name={'message'} />
         <button>ADD</button>
        </form>
      </div>
    </div>
  );
};



const DialogsReduxForm = reduxForm({form:'message'})(Dialogs)

const dialogsContainer = function (props) { 
  const onSubmit = (formData) =>{
    console.log(formData)
   props.addMessage(formData.message)
  }

  return <DialogsReduxForm onSubmit={onSubmit} {...props}/>
};

export default dialogsContainer;

