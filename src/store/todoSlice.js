import { createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import {
  FETCH_TODOS_REQUEST,
  FETCH_ADD_TODO_REQUEST,
  FETCH_REMOVE_TODO_REQUEST,
  FETCH_CHANGE_TODO_REQUEST,
} from "./saga/watchers";

const initialState = {
  items: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state, action) => {
      state.items = [...action.payload];
    },

    addTodo: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeTodo: (state, action) => {
      state.items = state.items.filter(
        (item) => item._id !== action.payload._id
      );
    },

    changeTodo: (state, action) => {
      const { _id, text, checked } = action.payload;

      state.items = state.items.map((item) =>
        item._id === _id ? { ...item, text, checked } : item
      );
    },
  },
});

export const useTodo = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const fetchTodos = () => {
    dispatch({ type: FETCH_TODOS_REQUEST });
  };

  const fetchAddTodo = (todoName) => {
    dispatch({ type: FETCH_ADD_TODO_REQUEST, payload: todoName });
  };

  const fetchRemoveTodo = (id) => {
    dispatch({ type: FETCH_REMOVE_TODO_REQUEST, payload: id });
  };

  const fetchChangeTodo = (data) => {
    dispatch({ type: FETCH_CHANGE_TODO_REQUEST, payload: data });
  };

  return {
    todo,
    fetchTodos,
    fetchAddTodo,
    fetchRemoveTodo,
    fetchChangeTodo,
  };
};

export const { getTodos, addTodo, removeTodo, changeTodo } = todoSlice.actions;

export default todoSlice.reducer;
