import React, { useState } from "react";
import "../components/ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]); //All tasks should be stored in an array
  const [newTask, setNewTask] = useState(""); //This is for new task

  // Function to handle input changes
  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add the new task to the tasks list
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask(""); // Clear the input field
    }
  };

  //Delete the task
  const deleteHandler = (index) => {
    const getTask = [...tasks]; //i will get all task
    getTask.splice(index, 1); //deleting task
    setTasks(getTask); //update the task from array
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <div className="add">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your task"
            value={newTask}
            onChange={handleInputChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="items">
        {tasks.length === 0 ? (
          <p>No tasks available</p>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default ToDoList;
