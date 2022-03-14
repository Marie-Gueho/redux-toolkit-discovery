import { useState } from "react";
import './App.css';

import TaskHeader from '../TaskHeader';
import TasksList from '../TasksList';
import TaskForm from '../TaskForm';

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Faire les courses', done: false},
    {id: 1, text: 'Faire le ménage', done: true},
  ]);

  const addTask = (text) => {
    const newTask = {
      text,
      id: Date.now(),
      done: false,
    };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    const realTask = tasks.find((t) => t.id === id);
    const index = tasks.findIndex((t) => t.id === id);
    const taskCopy = { ...realTask };
    const tasksListCopy = [...tasks];

    taskCopy.done = !taskCopy.done;
    tasksListCopy[index] = taskCopy;
    setTasks(tasksListCopy);
  };

  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task => task.id === id));
    setTasks(filteredTasks);
  }

  return (
    <div className="container">
      <article>
        <TaskHeader tasks={tasks}/>
        <TasksList tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}/>
        <TaskForm />
      </article>
    </div>
  );
}

export default App;