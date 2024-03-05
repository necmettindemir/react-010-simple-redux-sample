import { configureStore } from '@reduxjs/toolkit'

import balanceReducer from "reduxStore/slice/balanceSlice";
import todosReducer from "reduxStore/slice/todosSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    todos: todosReducer,    
  }
})
