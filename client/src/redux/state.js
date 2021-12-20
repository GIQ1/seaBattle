import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

let store = {
  _state: {
    profilePage: {
      postDate: [
        { id: 1, number: 1 },
        { id: 2, number: 2 },
        { id: 3, number: 3 },
        { id: 4, number: 4 },
        { id: 5, number: 5 },
        { id: 6, number: 6 },
      ],
      newPostText: '',
    },
    dialogsPage: {
      dialogData: [
        { id: 1, name: 'name 1' },
        { id: 2, name: 'name 2' },
        { id: 3, name: 'name 3' },
        { id: 4, name: 'name 4' },
        { id: 5, name: 'name 5' },
      ],
      messageItem: [
        { id: 1, date: 'mess 1' },
        { id: 2, date: 'mess 2' },
        { id: 3, date: 'mess 3' },
      ],
      messageText: '',
    },
    sidebar:{}
},

getState(){
  return this._state;
},

_rerenderTree(){
  console.log('changed');
},

  subscribe(observer){
  this._rerenderTree = observer;
  },
  dispatch(action){
    this._state.profilePage=profileReducer(this._state.profilePage, action);
    this._state.messagesPage=dialogsReducer(this._state.messagesPage, action);

    this._rerenderTree(this);
  }

}


export default store;
