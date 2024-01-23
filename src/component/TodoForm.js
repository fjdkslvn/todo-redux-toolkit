import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import styles from './TodoForm.module.css';
import { addList } from '../slice/todoSlice';
import { useDispatch } from "react-redux";

const TodoForm = ({}) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const dispatch = useDispatch();

    const handleSubmit = () => {
        if(!title){
            alert("제목을 입력해 주세요.");
            return;
        } else if(!body){
            alert("내용을 입력해 주세요.");
            return;
        }

        const todo = {
            title,
            body,
            id : uuidv4()
        };
        dispatch(addList(todo));
    }

    return(
        <div className={styles.form}>
            <div className={[styles.box, styles.titleBox].join(' ')}>
                <div>제목 : </div>
                <input value={title} onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className={[styles.box, styles.bodyBox].join(' ')}>
                <div>내용 : </div>
                <textarea value={body} onChange={e => setBody(e.target.value)}/>
            </div>

            <button className={styles.submit} onClick={handleSubmit}>생성</button>
        </div>
    )

}

export default TodoForm;