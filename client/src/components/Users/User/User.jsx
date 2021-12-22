import React from "react"
import s from './User.module.css'

const User = (props) =>{
    debugger
    return (<div className={s.block}>
        <div className={s.leftPart}> 
           <div className={s.leftPartDate}>
            <img className={s.avatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/1200px-Anonymous_emblem.svg.png"></img> 
            <button onClick={() => props.follow(props.date.id)}>{props.date.followed ? "Unfollow": "Follow"} </button>
          </div>
         
        </div>
        <div className={s.rightPartDate}>
            <span>{props.date.id}</span>
            <span>{props.date.name.first}</span>
            <span>{props.date.name.second}</span>
            <span>{props.date.place.country}</span>
            <span>{props.date.place.sity}</span>
            <span>{props.date.status}</span>
          </div>
        <div>

        </div>
    </div> )
}

export default User;