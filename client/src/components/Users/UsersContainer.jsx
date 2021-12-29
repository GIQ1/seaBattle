import React from 'react';
import { connect } from 'react-redux';
import Users from "./Users";
import {
  getUsersThunkCreator,
  setCurrentPage,
  followThunkCreator
} from '../../redux/usersReducer'
import { authRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';
import { 
  getCurrentPage, 
  getIsFollowing, 
  getIsLoading, 
  getPageSize,
  getTotalUsersCount, 
  getUserSuperSelector 
} from '../../redux/usersSelectors';


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  render() {
    const changeUser = (d) => {
      this.props.getUsersThunkCreator(d, this.props.pageSize)
    }
    return (<Users {...this.props} changeUser={changeUser} />)
  }
}


let mapStateToProps = (state) => {
  return {
    usersDate: getUserSuperSelector(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isLoading: getIsLoading(state),
    isFollowing: getIsFollowing(state)
  }
}


export default compose(
  connect(mapStateToProps, {
    setCurrentPage,
    getUsersThunkCreator,
    followThunkCreator,
  }),
  authRedirect
)(UsersAPIComponent)
