import React from "react";
import { Link } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogsItem = (props) =>{
return <div><Link to={"/dialogs/"+props.id}>{props.name}</Link></div>
}
const MessageItem = (props) =>{
  return <div>{props.content}</div>
  }

const Dialogs = () => {
  return <div className={s.dialogs}>
    <div className={s.dialogsName}> Dialogs
      <div>

        <DialogsItem id={1} name={"name 1"}/>
        <DialogsItem id={2} name={"name 2"}/>
        <DialogsItem id={3} name={"name 3"}/>
        <DialogsItem id={4} name={"name 4"}/>
        <DialogsItem id={5} name={"name 5"}/>
        <DialogsItem id={6} name={"name 6"}/>
      </div>
    </div>
    <div className={s.messages}> Messages
      <div>
        <MessageItem content={"mess 1"}/>
        <MessageItem content={"mess 2"}/>
        <MessageItem content={"mess 3"}/>


      </div>
    </div>
  </div>

}
export default Dialogs;