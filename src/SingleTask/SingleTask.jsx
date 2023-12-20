import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { editTask} from "../taskReducer";

const SingleTask = () => {
    const { id } = useParams("id");
    const dispatch = useDispatch();

    const task = useSelector((state) => state.tasks.list);
    const taskToShow = task.find((e) => e.id === parseInt(id))?.text || "task missing"

    
    const [taskText, setTaskText] = useState("");

    const editTaskSubmit = (e) => {
        e.preventDefault()
        dispatch(editTask({id: id, text: taskText}))
        setTaskText("");
    }



    return (
       <> 
            <h1>{taskToShow}</h1>
            
            <form onSubmit={editTaskSubmit} >
                <input type="text" placeholder="edit your task nigga" 
                onChange={(e) => {setTaskText(e.target.value)}}
                />
                <button type="submit">Edit task</button>    
            </form> 

        </>
    );
};

export default SingleTask;