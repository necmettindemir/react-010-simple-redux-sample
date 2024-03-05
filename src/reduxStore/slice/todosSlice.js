// Import the createSlice API from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit';

// This is the initial state of the slice
const initialState = {
  todoList: [],
};

export const todosSlice = createSlice({
  name: 'todo-name-nonsense!', // This is the name of the slice, we will later use this name to access the slice from the store
  initialState: initialState, // This is the initial state of the slice
  reducers: {
    // All the reducers go here
    addTodo: (state, action) => {      
      state.todoList.push(action.payload);
      console.log('state.todoList:', ...state.todoList);
    },
    deleteTodo: (state, action) => {      
      let index = action.payload;            
      state.todoList.splice( index,1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, deleteTodo } = todosSlice.actions;

// We export the reducer function so that it can be added to the store
export default todosSlice.reducer;
