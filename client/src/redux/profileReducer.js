import { profileAPI } from "../api/api";

let initialState = {
    postDate: [
        { id: 1, date: 1 },
        { id: 2, date: 2 },
        { id: 3, date: 3 },
        { id: 4, date: 4 },
        { id: 5, date: 5 },
        { id: 6, date: 6 },
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
                let stateCopy = {...state };
                stateCopy.postDate = [...state.postDate]
                stateCopy.postDate.push(newPost);

                return stateCopy
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

export const setProfileThunkCreator = (url) => {
    return (dispatch) => {
        profileAPI.setProfile(url).then(res => {
            dispatch(setUserProfile(res))
        })
    }
}
export const getStatusThunkCreator = (url) => {
        return (dispatch) => {
            profileAPI.getStatus(url).then(res => {
                dispatch(setUserStatus(res))
            })
        }
        
}
export const setStatusThunkCreator = (url,status) => {
    return (dispatch) => {
        profileAPI.setStatus(url,status).then(res => {
            dispatch(setUserStatus(res))
        })
    }
    
}





export default profileReducer