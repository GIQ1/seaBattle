let rerenderTree = () =>{
  console.log('changed');
}

const state = {
  profilePage: {
    postDate: [
      { id: 1, number: 1 },
      { id: 2, number: 2 },
      { id: 3, number: 3 },
      { id: 4, number: 4 },
      { id: 5, number: 5 },
      { id: 6, number: 6 },
    ],
    newPostText: '1234566',
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
    messageText: '1234',
  },
};

export const addPost = () => {
  const newPost = {
    id: 5,
    number: state.profilePage.newPostText,
  };
  state.profilePage.postDate.push(newPost);
  state.profilePage.newPostText = '';
  rerenderTree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderTree(state);
};

export const addMessage = () => {
  const newMessage = {
    id: 5,
    date: state.messagesPage.messageText,
  };
  state.messagesPage.messageItem.push(newMessage);
  state.messagesPage.messageText = '';
  rerenderTree(state);
};

export const updateNewMessageText = (newText) => {
  state.messagesPage.messageText = newText;
  rerenderTree(state);
};

export const subscribe = (observer) =>{
  rerenderTree = observer;
} 

export default state;
