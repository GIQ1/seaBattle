import * as axios from 'axios';
import { connect } from 'react-redux';
import React from 'react';
import Profile from './Profile';


class ProfileContainerAPI extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount(){
    axios.get(`/profile?id=0`).then(res =>{
      this.props.setUserProfile(res.data)
  });
  }
  render(){
  return(
  
<Profile {...this.props}/>
  );
}
};
let mapStateToProps = (state) =>({
  userProfile:state.profilePage.userProfile
})
let setUserProfile = (profile) =>({type:'SET-USER-PROFILE',userProfile:profile})
export default connect(mapStateToProps,{setUserProfile})(ProfileContainerAPI)