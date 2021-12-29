import React from "react";
import { useEffect,useState } from "react";

const ProfileStatusWithHooks = (props) =>{
    let [editMode, setEditMode] = useState(false);
    let [state, setState] = useState(props.userStatus);

    let activateEditMode = () => setEditMode(true)
    
    let deactivateEditMode = () =>{
        setEditMode(false)
        props.setStatus(props.url,state)
    }
    let changeField =  (e) => setState(e.target.value)
    

    useEffect(() =>{
        setState(props.userStatus)
    },[props.userStatus])

    return (
        <>
        { editMode
         ? <input onChange={e =>changeField(e)} onBlur={deactivateEditMode} autoFocus={true}  value={state}></input> 
         : <div onDoubleClick={activateEditMode}>{state ? state :'----------'}</div> 
        }
           </>
      
    )
}

  export default ProfileStatusWithHooks;
  