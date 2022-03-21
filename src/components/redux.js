import { configureStore, createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {id: 1, text: 'Faire les courses', done: false},
  ],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: Date.now(),
        done: false,
        text: action.payload,
      }
      state.push(newTask);
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      task.done = !task.done;
    },
    deleteTask: (state, action) => {
      state = state.filter(task => task.id !== action.payload);
      return state;
    },
  },
});

export const { addTask, deleteTask, toggleTask } =  todoSlice.actions;

export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer
  }
})