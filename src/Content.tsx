import { useRef, FunctionComponent } from "react";
import constants from "./todo/constants";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./todo/store";
const Content: FunctionComponent = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state : RootState) =>{state.todoList});
    const inputFocus = useRef<HTMLInputElement>(null);
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const { todoInput, todos } = state;
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        // dispatch({type: constants.SET_TODO_INPUT, payload:value});
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // dispatch({type: constants.SET_TODO_INPUT, payload:""});
        // dispatch({type: constants.SET_TODO_ADD, payload:state.todoInput});
        inputFocus.current?.focus();
    }
    const handleDelete = (index: number) => {
        dispatch({type: constants.SET_TODO_REMOVE, payload:index})
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    // value={todoInput}
                    onChange={handleChange}
                    placeholder="type todo stuff"
                    ref={inputFocus}
                />
                <button>Save</button>
            </form>
            <div>
                <p>Todo list:</p>
                <ul>
                    {/* {todos.map((todo, index) =>
                        <li
                            key={index}
                        >{todo}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>
                    )} */}
                </ul>
            </div>
        </div>
    );
}

export default Content;