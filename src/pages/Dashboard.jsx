import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography, Grid, Container, Box } from "@mui/material";
import {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
  selectFilteredTasks,
} from "../store/taskSlice";
import AddTask from "../components/AddTask";
import EditTask from "../components/EditTask";
import TaskList from "../components/TaskList";
import DeleteConfirmationDialog from "../components/DeleteConfirmationDialog";

const TaskManager = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectFilteredTasks);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false); // State for dialog
  const [taskToDelete, setTaskToDelete] = useState(null); // Store task to be deleted

  // Handle adding a task
  const handleAddTask = (task) => {
    dispatch(addTask(task));
  };

  // Handle editing a task
  const handleEditTask = (updatedTask) => {
    dispatch(editTask(updatedTask));
    setEditingTask(null);
  };

  // Open the delete confirmation dialog
  const openDeleteDialog = (taskId) => {
    setTaskToDelete(taskId);
    setDeleteDialogOpen(true);
  };

  // Confirm task deletion
  const handleConfirmDelete = () => {
    dispatch(deleteTask(taskToDelete));
    setDeleteDialogOpen(false);
    setTaskToDelete(null);
  };

  // Close the delete dialog
  const handleCloseDeleteDialog = () => {
    setDeleteDialogOpen(false);
    setTaskToDelete(null);
  };

  // Toggle task completion
  const handleToggleTaskCompletion = (taskId) => {
    dispatch(toggleTaskCompletion(taskId));
  };

  // Set filter for task display
  const handleSetFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  // Search functionality
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Filter tasks by title
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Box sx={{ textAlign: "center", marginBottom: 4 }}>
        <Typography variant="h3" gutterBottom>
          Task Management Dashboard
        </Typography>
      </Box>

      {/* Search Bar */}
      <Box sx={{ marginBottom: 4 }}>
        <input
          label="Search by title"
          value={searchQuery}
          onChange={handleSearch}
        />
      </Box>

      {/* Filter Buttons */}
      <Box sx={{ marginBottom: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" onClick={() => handleSetFilter("all")}>
              All Tasks
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSetFilter("completed")}
            >
              Completed Tasks
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSetFilter("pending")}
            >
              Pending Tasks
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              onClick={() => handleSetFilter("overdue")}
            >
              Overdue Tasks
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* Add/Edit Task */}
      <Box sx={{ marginBottom: 4 }}>
        {editingTask ? (
          <EditTask
            task={editingTask}
            onEditTask={handleEditTask}
            onCancel={() => setEditingTask(null)}
          />
        ) : (
          <AddTask onAddTask={handleAddTask} />
        )}
      </Box>

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        onEdit={(task) => setEditingTask(task)}
        onDelete={openDeleteDialog} // Use delete dialog
        onToggleComplete={handleToggleTaskCompletion}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={deleteDialogOpen}
        onClose={handleCloseDeleteDialog}
        onConfirmDelete={handleConfirmDelete}
      />
    </Container>
  );
};

export default TaskManager;
