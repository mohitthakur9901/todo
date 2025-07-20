import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoItem {
  id: number;
  title: string;
  description: string;
}

interface TodoState {
  todos: TodoItem[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTodo: (
      state,
      action: PayloadAction<{ title: string; description: string }>
    ) => {
      const todoData = {
        id: state.todos.length + 1,
        title: action.payload.title,
        description: action.payload.description,
      };

      state.todos.push(todoData);
    },
    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (
      state,
      action: PayloadAction<{ id: number; title: string; description: string }>
    ) => {
      const { id, title, description } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = title;
        todo.description = description;
      }
    },
  },
});

export const { createTodo, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
