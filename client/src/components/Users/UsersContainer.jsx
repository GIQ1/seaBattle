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


class UsersAPIComponent extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
  }
  render() {
    let changeUser = (d) => {
      this.props.getUsersThunkCreator(d, this.props.pageSize)
    }

    return (<Users {...this.props} changeUser={changeUser} />)
  }
}


let mapStateToProps = (state) => {
  return {
    usersDate: state.usersPage.usersDate,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isLoading: state.usersPage.isLoading,
    isFollowing: state.usersPage.isFollowing
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
