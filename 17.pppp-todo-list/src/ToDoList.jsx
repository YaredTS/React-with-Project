import React, {useState} from "react"


function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }
// If we didn't set the newtask and we type within the textbox we wouldn't see the task
    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function deleteTask(index){
        const updatedTasks = tasks.filter((_, i) => i !== index)
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]] =
            [updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveTasKDown(index){
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index + 1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks);
        }
    }

    return(
<div className="to-do-list">
    <h1>To-Do-List</h1>

    <div>
        <input 
        type="text" 
        placeholder="Enter a task ..."
        value={newTask}
        onChange={handleInputChange}/>
        <button
        className="add-button"
        onClick={addTask}>Add
        </button>
    </div>

    <ol>
        {tasks.map((task, index) => 
        <li key={index}>
            <span className="text">{task}</span>
            <button
                className="delete-button"
                onClick={()=> deleteTask(index)}>
               ❌
            </button>
            <button
                className="move-button"
                onClick={()=> moveTaskUp(index)}>
               👆
            </button>
            <button
                className="move-button"
                onClick={()=> moveTasKDown(index)}>
                👇
            </button>
        </li>
        )}
    </ol>
</div>
    );

}


export default ToDoList