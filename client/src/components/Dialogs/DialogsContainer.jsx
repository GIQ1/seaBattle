import React from 'react';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { authRedirect } from '../hoc/authRedirect';
import { compose } from 'redux';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE'

let addMessageActionCreator = () => {
  return { type: ADD_MESSAGE }

}
let updateNewMessageText = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, newText: text }
}


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    onChangeMessage: (text) => {
      dispatch(updateNewMessageText(text))
    },
    addMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  authRedirect
)
  (Dialogs);