import { combineReducers } from "redux";
import { GetMessageAction, Message, Todo, TodoAction } from "../actions";
import { actionTypes } from "../actions/types";

export interface AppState {
    todos: Todo[];
    header: Message;
}

export const fetchTodosReducer = (state:Todo[] = [], action:TodoAction) => {
    switch(action.type) {
        case actionTypes.FETCH_TODOS:
            //console.log("payload",action.payload);
            return action.payload;
        case actionTypes.DELETE_TODO:
            console.log("state",state);
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export const getMesageReucer = (state:Message = {title:"yo"},action:GetMessageAction) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers<AppState>({
    todos: fetchTodosReducer,
    header: getMesageReucer
})