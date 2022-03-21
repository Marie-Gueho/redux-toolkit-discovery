import { useSelector } from "react-redux";

const TaskHeader = () => {
  const tasks = useSelector(state => state.todo)
  const undoneTask = tasks.filter((task => task.done === false));

  return (
    <header>
      <h1>TODO LIST</h1>
      <p>Tâches à faire: <strong>{undoneTask.length}</strong></p>
    </header>
  )
};

export default TaskHeader;