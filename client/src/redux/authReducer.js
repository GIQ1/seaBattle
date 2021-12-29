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

export const authThunkCreator = (data) =>  async (dispatch) => {
       let res =await authAPI.login(data)
            if(res.message =='OK')
              dispatch(setUserData(res))
            else{
                dispatch(stopSubmit('login', {_error:res.message}))
        }
}
        
    
export const disauthThunkCreator = () => async (dispatch) => {   
    let res = await authAPI.logout()
            if(res.message =='OK')
            dispatch(setUserData(null))
}


export const chekAuthThunkCreator = () => async (dispatch) => {   
    let res = await authAPI.checkAuth()
            if(res.message =='OK')
            dispatch(setUserData(res))
}

export default authReducer