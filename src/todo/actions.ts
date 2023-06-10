
type setTodoInput = (payload:string) =>({
    type:constants.SET_TODO_INPUT,
    payload:string
})
type setTodoAdd = (payload :string) =>({
    type:constants.SET_TODO_INPUT,
    payload:string
})
type setTodoRemove = (payload :number) =>({
    type:constants.SET_TODO_INPUT,
    payload:string
})

type AppActions = setTodoAdd | setTodoInput | setTodoRemove;