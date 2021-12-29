
import { chekAuthThunkCreator } from "./authReducer";
let initialState = {
    isInit: false,

}

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'INIT-SUCCESS':
            {
                return {
                   ...state
                   , isInit: true,
                }
            }
        default:
            return state
    }
}

export const initSuccess = () =>({type:'INIT-SUCCESS'})

export const initApp = () =>(dispath)=> {
    dispath(chekAuthThunkCreator());
    dispath(initSuccess());
}

export default appReducer