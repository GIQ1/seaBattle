let initialState = {
    postDate: [
      { id: 1, date: 1 },
      { id: 2, date: 2 },
      { id: 3, date: 3 },
      { id: 4, date: 4 },
      { id: 5, date: 5 },
      { id: 6, date: 6 },
    ],
    newPostText: '',
  }

const profileReducer = (state = initialState, action) =>{
    switch(action.type){
    case 'ADD-POST':{
        const newPost = {
          id: 5,
          date: state.newPostText,
        };
        let stateCopy = {...state};
        stateCopy.postDate = [...state.postDate]
        stateCopy.postDate.push(newPost);
        stateCopy.newPostText = '';

        return stateCopy
}
        case 'UPDATE-NEW-POST-TEXT':{
        let stateCopy ={...state};
        stateCopy.newPostText = action.newText;

        return stateCopy
}
        default:

        return state
}
}

export default profileReducer