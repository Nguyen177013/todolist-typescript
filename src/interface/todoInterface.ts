import { TodoItem } from "../type/todoType";

export interface titleSchema{
    index:number,
    title: string
}
export interface MyObject {
    todoInput: string
    pending: number | null;
    todos: TodoItem[]
}