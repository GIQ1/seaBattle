import { profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST'
let initialState = {
    postDate: [
        { id: 0, date: 1 },
        { id: 1, date: 2 },
        { id: 2, date: 3 },
        { id: 3, date: 4 },
        { id: 4, date: 5 },
        { id: 5, date: 6 },
    ],
    userProfile: null,
    userStatus:null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            {
                const newPost = {
                    id: state.postDate.length,
                    date: action.body,
                };
                return {
                    ...state,
                    postDate: [...state.postDate, newPost]
                }

            }
        case 'SET-USER-PROFILE':
            {
                return {...state, userProfile: action.userProfile }
            }
        case 'SET-USER-STATUS':
            {
                return {...state, userStatus: action.userStatus }
            }
        default:
            return state
    }
}



let setUserProfile = (profile) => ({ type: 'SET-USER-PROFILE', userProfile: profile })
let setUserStatus = (status) => ({ type: 'SET-USER-STATUS', userStatus: status })

export const setProfileThunkCreator = (url) => async (dispatch) => {
        let res =await profileAPI.setProfile(url)
            dispatch(setUserProfile(res))
}
export const getStatusThunkCreator = (url) => async (dispatch) => {
           let res = await profileAPI.getStatus(url)
                dispatch(setUserStatus(res))
}
        
export const setStatusThunkCreator = (url,status) => async (dispatch) => {
        let res = await profileAPI.setStatus(url,status)
            dispatch(setUserStatus(res))  
}

export const addPostActionCreator = (data) => {
    return {type:ADD_POST,body:data}
}

export default profileReducer