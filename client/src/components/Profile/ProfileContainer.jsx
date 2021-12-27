import { connect } from 'react-redux';
import React from 'react';
import Profile from './Profile';
import {
  useLocation
} from "react-router-dom";
import {
  setProfileThunkCreator,
  getStatusThunkCreator,
  setStatusThunkCreator
} from '../../redux/profileReducer'
import { authRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';


class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    if (!this.props.url.search) this.props.url.search = `?id=${this.props.id}`
    this.props.setProfileThunkCreator(this.props.url.search)
    this.props.getStatusThunkCreator(this.props.url.search)
  };


  render() {
    if (!this.props.userProfile) {
      return <img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'></img>
    }else
    return (
      <Profile userProfile = {this.props.userProfile} 
                setStatus = {this.props.setStatusThunkCreator}
                url={this.props.url.search}
      />
    );
  }
};



let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
  id:state.authReducer.userId
})


function ProfileContainerURL(props) {

  let WichUrlDataContainerComponent = useLocation()
  return (
    <ProfileContainerAPI {...props} url={WichUrlDataContainerComponent} />
  );

};

export default compose(
  connect(mapStateToProps, { setProfileThunkCreator,getStatusThunkCreator,setStatusThunkCreator }),
  authRedirect
)
  (ProfileContainerURL)