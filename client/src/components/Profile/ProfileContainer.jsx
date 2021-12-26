import { connect } from 'react-redux';
import React from 'react';
import Profile from './Profile';
import {
  useLocation
} from "react-router-dom";
import {
  authThunkCreator
} from '../../redux/profileReducer'
import { authRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';


class ProfileContainerAPI extends React.Component {
  componentDidMount() {
    if (!this.props.url.search) this.props.url.search = '?id=0'
    this.props.authThunkCreator(this.props.url.search)
  };



  render() {
    if (!this.props.userProfile) {
      return <img src='https://cdn.dribbble.com/users/108183/screenshots/2301400/spinnervlll.gif'></img>
    }
    return (
      <Profile {...this.props} />
    );
  }
};



let mapStateToProps = (state) => ({
  userProfile: state.profilePage.userProfile,
})


function ProfileContainerURL(props) {

  let WichUrlDataContainerComponent = useLocation()
  return (
    <ProfileContainerAPI {...props} url={WichUrlDataContainerComponent} />
  );

};

export default compose(
  connect(mapStateToProps, { authThunkCreator }),
  authRedirect
)
  (ProfileContainerURL)