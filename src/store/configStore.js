import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

const configStore = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default configStore;
