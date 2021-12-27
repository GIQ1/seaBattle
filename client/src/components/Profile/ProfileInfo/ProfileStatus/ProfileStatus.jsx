import React from "react";

class ProfileStatus extends React.Component {
    state={
        editMode:false,
        userStatus:this.props.userStatus
    }
    activateEditMode = () =>{
        this.setState({
            editMode:true
        })
    }
    deactivateEditMode = () =>{
        this.setState({
            editMode:false
        })
        this.props.setStatus(this.props.url,this.state.userStatus)
    }
    changeField =  (e) =>{
        this.setState({
            userStatus:e.target.value
        })
    }
     componentDidUpdate(prevProps,prevState){
        if (this.props.userStatus !==prevProps.userStatus){
            this.setState({
                userStatus:this.props.userStatus
            })
        }
     }
render(){
    return (
      
        <>
        {this.state.editMode
         ? <input autoFocus={true} onBlur={this.deactivateEditMode} onChange={(e)=>this.changeField(e)} value={this.state.userStatus}></input> 
         : <div onDoubleClick={  this.activateEditMode}>{this.state.userStatus|| '----------'}</div> 
        }
           </>
      
    )
}
  };
  export default ProfileStatus;
  