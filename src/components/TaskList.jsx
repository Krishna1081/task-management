import TaskItem from "../components/TaskItem";
import PropTypes from "prop-types";

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      dueDate: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired, // tasks should be an array of task objects
  onEdit: PropTypes.func.isRequired, // onEdit should be a function
  onDelete: PropTypes.func.isRequired, // onDelete should be a function
  onToggleComplete: PropTypes.func.isRequired, // onToggleComplete should be a function
};

export default TaskList;
