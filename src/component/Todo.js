import styles from './Todo.module.css';
import { removeList } from '../slice/todoSlice';
import { useDispatch } from 'react-redux';

const Todo = ({todo}) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeList(todo.id));
    }

    return (
        <div className={styles.box}>
            <div className={styles.title}>{`제목 : ${todo.title}`}</div>
            <div className={styles.body}>{`내용 : ${todo.body}`}</div>
            <button className={styles.delBtn} onClick={handleRemove}>삭제</button>
        </div>
    )
}

export default Todo;