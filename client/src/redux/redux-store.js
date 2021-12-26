import { applyMiddleware, combineReducers, createStore } from 'redux'
import authReducer from './authReducer';
import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import usersReducer from './usersReducer';
import thunk from 'redux-thunk'

let redusers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    authReducer: authReducer
});

let store = createStore(redusers, applyMiddleware(thunk));

window.store = store;

export default store;