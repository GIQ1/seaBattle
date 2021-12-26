import { authAPI } from "../api/api";

let initialState = {
    userId: null,
    name: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            {
                return {
                    ...state,
                    ...action.data,
                    isAuth: !state.isAuth
                }
            }
        default:
            return state
    }
}

let setUserData = (data) => {
    return { type: 'LOGIN', data: data }
}

export const authThunkCreator = () => {
    return (dispatch) => {
        authAPI.login().then(res => {
            dispatch(setUserData(res))
        })
    }
}


export default authReducer