import { useRef, FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./todo/store";
import { todoAction } from "./todo/todo-slice";
const Content: FunctionComponent = () => {
    const dispatch = useDispatch();
    const {todoInput, todos} = useSelector((state : RootState) =>state.todoList);
    const inputFocus = useRef<HTMLInputElement>(null);    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        dispatch(todoAction.setInut(value));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(todoAction.setInut(""));
        dispatch(todoAction.addData(todoInput));
        inputFocus.current?.focus();
    }
    const handleDelete = (index: number) => {
        dispatch(todoAction.deleteData(index));
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
                <button>Save</button>
            </form>
            <div>
                <p>Todo list:</p>
                <ul>
                    {todos.map((todo, index) =>
                        <li
                            key={index}
                        >{todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Content;