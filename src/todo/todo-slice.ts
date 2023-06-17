import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MyObject, titleSchema } from "../interface/todoInterface";

const initialState = {
    todoInput: "",
    todos: [
        {
            title: 'Chơi Genshin',
            status: false
        },
        {
            title: 'Học React Hook',
            status: false
        },
        {
            title: 'Masturbate at 3 A.M',
            status: true
        }
    ],
    pending: null 
};

const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setInut(state: MyObject, payload: PayloadAction<string>) {
            state.todoInput = payload.payload;
        },
        addData(state: MyObject , payload: PayloadAction<string>) {
            state.todos.push({
                title: payload.payload,
                status: false
            });
        },
        changeStatus(state: MyObject , payload : PayloadAction<number>){
            state.todos[payload.payload].status = !state.todos[payload.payload].status;
        },
        editTitle(state: MyObject , payload : PayloadAction<titleSchema>){
            state.todos[payload.payload.index].title = payload.payload.title;
            state.pending = null;
        },
        changeTitle(state: MyObject , payload : PayloadAction<titleSchema>){
            state.todoInput = payload.payload.title;
            state.pending = payload.payload.index;
        },
        deleteData(state: MyObject , payload: PayloadAction<number>) {
            state.todos.splice(payload.payload, 1);
        }
    }
})

export const todoAction = todoSlice.actions;
export default todoSlice;