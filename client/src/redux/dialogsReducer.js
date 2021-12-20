let initialState = {
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
  }

const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
    case 'ADD-MESSAGE' :
        const newMessage = {
          id: 5,
          date: state.messageText,
        };
        state.messageItem.push(newMessage);
        state.messageText = '';
        return state
    case 'UPDATE-NEW-MESSAGE-TEXT':
        state.messageText = action.newText;
        return state
    default: 
    return state
}
}

export default dialogsReducer