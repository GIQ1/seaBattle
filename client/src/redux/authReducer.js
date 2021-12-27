import { authAPI } from "../api/api";
import {stopSubmit } from 'redux-form'
let initialState = {
    userId: null,
    login: null,
    isAuth: false,
    message:null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'LOGIN':
            {
                return {
                   ...action.data
                }
            }
        default:
            return state
    }
}

let setUserData = (data) => {
 
    return { type: 'LOGIN', data: data }
}

export const authThunkCreator = (data) => {

    return (dispatch) => {
        authAPI.login(data).then(res => {
            if(res.message =='OK')
            dispatch(setUserData(res))
            else{
                dispatch(stopSubmit('login', {_error:res.message}))
        }
        })

    }
        
    }
export const disauthThunkCreator = () => {
    return (dispatch) => {   
    authAPI.logout().then((res) => {
            if(res.message =='OK')
            dispatch(setUserData(null))
        })
    }
}

export const chekAuthThunkCreator = () => {
    return (dispatch) => {   
    authAPI.checkAuth().then((res) => {
            if(res.message =='OK')
            dispatch(setUserData(res))
        })
        return "asdfg";
    }
}

export default authReducer