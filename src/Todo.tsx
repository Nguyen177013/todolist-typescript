const Todo = (todo) => {
    console.log(todo);
    
    return ( 
         <li
                            // style={todo.status ? { color: "#ccc" } : {}}
                        >
                            {/* {todo.title} */}
                            {/* {todo.status ||
                                <button
                                    onClick={() =>
                                        setInput({ index: index, title: todo.title })}>
                                    Edit
                                </button>
                            } */}
                            {/* <button
                                onClick={() => handleDelete(index)}
                            >
                                Delete
                            </button> */}
                            {/* <Checkbox
                                checked={todo.status} size="small"
                                onChange={() => handleStatus(index)}
                            /> */}
                        </li>
     );
}
 
export default Todo;