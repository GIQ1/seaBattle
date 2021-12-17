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
    messagesPage: {
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
},

getState(){
  return this._state;
},

rerenderTree(){
  console.log('changed');
},

  subscribe(observer){
  this.rerenderTree = observer;
  },
  dispatch(action){
    if(action.type == 'ADD-POST'){
        const newPost = {
          id: 5,
          number: this._state.profilePage.newPostText,
        };
        this._state.profilePage.postDate.push(newPost);
        this._state.profilePage.newPostText = '';
        this.rerenderTree(this);
    } else if(action.type == 'UPDATE-NEW-POST-TEXT'){

        this._state.profilePage.newPostText = action.newText;
        this.rerenderTree(this);

      } else if(action.type == 'ADD-MESSAGE'){
        const newMessage = {
          id: 5,
          date: this._state.messagesPage.messageText,
        };
        this._state.messagesPage.messageItem.push(newMessage);
        this._state.messagesPage.messageText = '';
        this.rerenderTree(this);
      }else if(action.type == 'UPDATE-NEW-MESSAGE-TEXT'){
        this._state.messagesPage.messageText = action.newText;
        this.rerenderTree(this);
      }
  }

}


export default store;
