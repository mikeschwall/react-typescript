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
            return action.payload;
        case actionTypes.DELETE_TODO:
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

export const getMessageReducer = (state:Message = {title:"Hello world"}, action:GetMessageAction) => {
    switch(action.type) {
        case actionTypes.GET_MESSAGE:
            return action.payload;
        default:
            return state;
    }
}

export const reducers = combineReducers<AppState>({
    todos:fetchTodosReducer,
    header: getMessageReducer
})