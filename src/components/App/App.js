import { Provider } from "react-redux";
import { store } from "../redux.js"
import './App.css';

import TaskHeader from '../TaskHeader';
import TasksList from '../TasksList';
import TaskForm from '../TaskForm';

function App() {
  /*
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Faire les courses', done: false},
    {id: 2, text: 'Faire le ménage', done: true},
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
    const filteredTasks = tasks.filter((task => task.id !== id));
    console.log(filteredTasks)
    setTasks(filteredTasks);
  }
*/
  return (
    <Provider store={store}>
      <div className="container">
        <article>
          <TaskHeader />
          <TasksList />
          <TaskForm />
        </article>
      </div>
    </Provider>
  );
}

export default App;
