import { useRef, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./todo/store";
import { titleSchema, todoAction, todosSchema } from "./todo/todo-slice";
import { Checkbox } from "@mui/material";
const Content: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { todoInput, todos, pending } = useSelector((state: RootState) => state.todoList);
    const inputFocus = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        dispatch(todoAction.setInut(value));
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if(pending == null){
            dispatch(todoAction.addData(todoInput));
            dispatch(todoAction.setInut(""));
            inputFocus.current?.focus();
        }
        else{
            dispatch(todoAction.editTitle({index:pending, title: todoInput}));
            dispatch(todoAction.setInut(""));
        }
    }
    const handleDelete = (index: number) => {
        dispatch(todoAction.deleteData(index));
    }
    const handleStatus = (index: number) => {
        dispatch(todoAction.changeStatus(index));
    }
    const setInput = (todo: titleSchema) => {
        dispatch(todoAction.changeTitle(todo));
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    value={todoInput}
                    onChange={handleChange}
                    placeholder="type todo stuff"
                    ref={inputFocus}
                />
                <button>{pending == null ? "Add" : "Change"}</button>
            </form>
            <div>
                <p>Todo list:</p>
                <ul>
                    {todos.map((todo, index) =>
                        <li
                            key={index}
                            style={todo.status ? { color: "#ccc" } : {}}
                        >{todo.title}
                            {todo.status ||
                                <button
                                    onClick={() =>
                                        setInput({ index: index, title: todo.title })}>
                                    Edit
                                </button>
                            }
                            <button
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button>
                            <Checkbox
                                checked={todo.status} size="small"
                                onChange={() => handleStatus(index)}
                            />
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Content;