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

type AppActions = typeTodoAdd | typeTodoInput | typeTodoRemove;
export type { AppActions }