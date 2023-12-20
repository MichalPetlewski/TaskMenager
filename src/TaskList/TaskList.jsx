import { addTask as addTaskAction, removeTask as removeTaskAction, setDone as setDoneAction } from "../taskReducer";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { useState } from "react";
import editIcon from './edit-2-svgrepo-com.svg'
import doneIcon from './done-cover-1485-svgrepo-com.svg'
import './TaskList.css'

const TaskList = () => {
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch();

    const [taskText, setTaskText] = useState("");

    let taskCount = tasks.length

    const addTask = (e) => {
        e.preventDefault();
        dispatch(addTaskAction(taskText))
        setTaskText("");
    }

    return (
        <div>
            <h2>Task count: {taskCount}</h2>
            <ul>
                {tasks.map((t) => (
                    <li className="list-item" key={t.id}>
                        <Link className={
                            t.isDone ? "done" : "not-done"} to={`/task/${t.id}`}>
                                {t.text}
                        </Link>
                        <div className="buttons">
                            <button onClick={() => {
                                dispatch(removeTaskAction(t.id))
                            }}>X</button>
                            <button onClick={() => {
                                dispatch(setDoneAction(t.id))
                                }}>
                                <img className="buttonImg" src={doneIcon} alt="" />
                            </button>
                        </div>

                    </li>
                ))}
            </ul>
            <form onSubmit={addTask}>
                <div className="form-wrapper">
                    <input 
                    type="text" 
                    value={taskText} 
                    onChange={(e) => {
                        setTaskText(e.target.value)
                    }}
                    />
                    <button type="submit">add your task!</button>
                </div>
            </form>
        </div>


    );
};

export default TaskList;

