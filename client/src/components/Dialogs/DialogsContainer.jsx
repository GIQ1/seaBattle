import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { authRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';

const ADD_MESSAGE = 'ADD-MESSAGE'

let addMessageActionCreator = (data) => {
  return { type: ADD_MESSAGE, message: data }

}

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (data) => {
      dispatch(addMessageActionCreator(data))
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  authRedirect
)
  (Dialogs);