import { useRef, useState} from "react";

let todoList = ["playing Genshin", "coding", "eating"] ;
const Content = () => {
    const [input, setInupt] = useState("");
    const [todos, setTodo] = useState(todoList);
    const inputFocus = useRef<HTMLInputElement>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;
        setInupt(value);
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        todoList.push(input)
        setInupt("");
        inputFocus.current!.focus();
        console.log(todoList);
    }
    const handleDelete = (index: number) => {
        setTodo(
            pretodo =>{
                const newArr = [...pretodo];
                newArr.splice(index, 1);
                return newArr;
            }
        )
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text"
                    value={input}
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
                        <button onClick={()=>handleDelete(index)}>Delete</button>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Content;