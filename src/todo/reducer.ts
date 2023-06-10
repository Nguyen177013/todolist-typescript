import { Reducer } from 'react'
import { AppActions } from './actions';
import constants from './constants';
const initialState = {
    todoInput: "",
    todos: ['Chơi Genshin', 'Học React Hook', 'Thủ dâm vào 3h sáng']
};;

interface AppState {
    todoInput: string
    todos: string[]
}
const reducer: Reducer<AppState, AppActions> = (state, action) => {
    switch (action.type) {
        case constants.SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }
        case constants.SET_TODO_ADD:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case constants.SET_TODO_REMOVE:
            const removeTodo = [...state.todos];
            removeTodo.splice(action.payload, 1);
            return {
                ...state,
                todos: removeTodo
            }
        default:
            throw new Error('Action not supported');
    }
}
export { initialState, reducer }