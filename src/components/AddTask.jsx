import { useState } from "react";
import PropTypes from "prop-types";

const AddTask = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && dueDate) {
      onAddTask({ title, description, dueDate, completed: false });
      setTitle("");
      setDescription("");
      setDueDate("");
    } else {
      alert("Title and Due Date are required!");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

AddTask.propTypes = {
  onAddTask: PropTypes.func.isRequired, // onAddTask should be a function passed as a prop
};

export default AddTask;
