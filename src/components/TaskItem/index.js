const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleTask(task.id)}
        />
        {task.text}

        <span
          onClick={() => deleteTask(task.id)}
          role="button"
          style={{ padding: "5px", marginLeft: "20px" }}
        >
          X
        </span>
      </label>
    </div>
  );
};

export default TaskItem;
