import { FETCH_POSTS, NEW_POST, ADD_NAME } from "../actions/types";


const initialState = {
    items: [],
    item: {},
    name: ""

}


export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            };
        case ADD_NAME:
            const newState = {...state, name : action.payload.name}
            return newState
        default:
            return state
    }
}
