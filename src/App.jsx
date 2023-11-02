import './App.css'
import { useState } from 'react'
import { Task } from "./Task"

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");


  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false
    };
    //check for empty input
    if (newTask.trim() === "") {
      alert("input must not be empty")
    } else {
      setTodoList([...todoList, task]);
    }
    
    //clear text field
    setNewTask("");
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList(todoList.map((task) => {
      if (task.id === id) {
        return { ...task, completed: true}
      } else {
        return task;
      }
    }))
  }

  //allow enter to submit task
  const handleKeypress = (e) => {
    if (e.code === "Enter") {
      console.log("Enter");
      addTask();
    }
  }


  return (
    <div className="App">

      <div className="addTask">
        <input 
          //keep focus on input field
          onBlur={e => e.target.focus()}
          onKeyDown={handleKeypress}
          value={newTask} 
          onChange={handleChange} 
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="list">
        {todoList.map((task) => {
          return ( 
            <Task
              taskName={task.taskName} 
              id={task.id}
              completed={task.completed} 
              deleteTask={deleteTask}
              completeTask={completeTask}
            />
          )
        })}
      </div>
    </div>
  )
}

export default App
