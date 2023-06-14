import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoInput: "",
    todos: ['Chơi Genshin', 'Học React Hook', 'Thủ dâm vào 3h sáng']
};;
const todoSlice = createSlice({
    name: "todo",
    initialState: initialState,
    reducers: {
        setInut(state, payload: PayloadAction<string>) {
            state.todoInput = payload.payload;
        },
        addData(state, payload: PayloadAction<string>) {
            state.todos.push(payload.payload);
        },
        deleteData(state, payload: PayloadAction<number>) {
            state.todos.splice(payload.payload, 1);
        }
    }
})

export const { addData, deleteData, setInut } = todoSlice.actions;
export default todoSlice;