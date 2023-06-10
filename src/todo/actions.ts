import constants from "./constants"


type typeTodoInput = {
    type: "set_todo_input",
    payload: string
}
type typeTodoAdd = {
    type: constants.SET_TODO_ADD,
    payload: string
}
type typeTodoRemove = {
    type: constants.SET_TODO_REMOVE,
    payload: number
}

const setTodoInput = (payload: string) => ({
    type: constants.SET_TODO_INPUT,
    payload: payload
})

const setTodoAdd = (payload: string) => ({
    type: constants.SET_TODO_ADD,
    payload: payload
})

const setTodoRemove = (payload: number) => ({
    type: constants.SET_TODO_REMOVE,
    payload: payload
})

type AppActions = typeTodoAdd | typeTodoInput | typeTodoRemove;
const Actions = { setTodoAdd: setTodoAdd, setTodoRemove: setTodoRemove, setTodoInput: setTodoInput };
export type { AppActions }
export {Actions}