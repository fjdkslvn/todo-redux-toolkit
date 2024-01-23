import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadList } from '../slice/todoSlice';
import Todo from "./Todo";

const TodoList = ({}) => {
    const todoList = useSelector((state) => state.todoSlice.list);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadList());
    },[])

    return(
        <>
            {todoList.map((todo, idx) => (
                <Todo todo={todo} key={todo.id}/>
            ))}
        </>
    )

}

export default TodoList;