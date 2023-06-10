import { useRef, useReducer, FunctionComponent } from "react";
import { initialState, reducer } from "./todo/reducer";
import { Actions } from "./todo/actions";
const Content: FunctionComponent = () => {
    const inputFocus = useRef<HTMLInputElement>(null);
    const [state, dispatch] = useReducer(reducer, initialState);
    const { todoInput, todos } = state;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        console.log(Actions.setTodoInput(value));
        
        dispatch(Actions.setTodoInput(value));
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    }
    const handleDelete = (index: number) => {
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