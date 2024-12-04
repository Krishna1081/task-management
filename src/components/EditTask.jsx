import { useState } from "react";
import PropTypes from "prop-types";

const EditTask = ({ task, onEditTask, onCancel }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleSave = () => {
    onEditTask({ ...task, title, description, dueDate });
  };

  return (
    <div className="edit-task">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

EditTask.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    dueDate: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired, // Task should be an object with specific properties
  onEditTask: PropTypes.func.isRequired, // onEditTask should be a function
  onCancel: PropTypes.func.isRequired, // onCancel should be a function
};

export default EditTask;
