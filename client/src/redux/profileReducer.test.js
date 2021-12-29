import profileReducer, { addPostActionCreator } from "./profileReducer";

it('new post added', ()=>{
    let action =addPostActionCreator('sdafwafsg');
    let initialState = {
        postDate: [
            { id: 0, date: 1 },
            { id: 1, date: 2 },
            { id: 2, date: 3 },
            { id: 3, date: 4 },
            { id: 4, date: 5 },
            { id: 5, date: 6 },
        ]
    }
    
    let newState = profileReducer(initialState, action)
    expect(newState.postDate.length).toBe(7)
})

