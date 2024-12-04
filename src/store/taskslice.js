import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  filter: "all", // Filter state (all, completed, pending, overdue)
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Add a new task
    addTask: (state, action) => {
      const newTask = { ...action.payload, id: Date.now() }; // Auto-generate an ID
      state.tasks.push(newTask);
    },

    // Edit an existing task
    editTask: (state, action) => {
      const updatedTask = action.payload;
      const taskIndex = state.tasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (taskIndex >= 0) {
        state.tasks[taskIndex] = updatedTask;
      }
    },

    // Delete a task
    deleteTask: (state, action) => {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((task) => task.id !== taskId);
    },

    // Toggle task completion
    toggleTaskCompletion: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === taskId);
      if (taskIndex >= 0) {
        state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed;
      }
    },

    // Set the filter for task display
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

// Export actions to be dispatched
export const {
  addTask,
  editTask,
  deleteTask,
  toggleTaskCompletion,
  setFilter,
} = taskSlice.actions;

// Selector to filter tasks based on the selected filter
export const selectFilteredTasks = (state) => {
  const today = new Date().toISOString().split("T")[0]; // Get today's date
  switch (state.tasks.filter) {
    case "completed":
      return state.tasks.tasks.filter((task) => task.completed);
    case "pending":
      return state.tasks.tasks.filter((task) => !task.completed);
    case "overdue":
      return state.tasks.tasks.filter(
        (task) => task.dueDate < today && !task.completed
      );
    default:
      return state.tasks.tasks;
  }
};

// Export the reducer to be included in the store
export default taskSlice.reducer;
