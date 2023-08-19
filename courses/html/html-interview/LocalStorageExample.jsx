import React, { useState } from 'react';

function LocalStorageExample() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput.trim() === '') return;

        // Store the task in local storage
        localStorage.setItem('task_' + Date.now(), taskInput);

        // Update the task list
        setTasks([...tasks, taskInput]);
        setTaskInput('');
    };

    return (
        <div>
            <h1>Local Storage Example</h1>
            <input
                type="text"
                id="taskInput"
                placeholder="Enter a task"
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
            />
            <button onClick={addTask}>Add Task</button>

            <ul id="taskList">
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default LocalStorageExample;
