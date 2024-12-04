import PropTypes from "prop-types";

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>
      <div className="task-actions">
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onToggleComplete(task.id)}>
          {task.completed ? "Mark Incomplete" : "Mark Completed"}
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired, // Task should be an object with specific properties
  onEdit: PropTypes.func.isRequired, // onEdit should be a function
  onDelete: PropTypes.func.isRequired, // onDelete should be a function
  onToggleComplete: PropTypes.func.isRequired, // onToggleComplete should be a function
};

export default TaskItem;
