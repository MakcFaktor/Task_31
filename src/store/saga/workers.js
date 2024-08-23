import { call, put } from "redux-saga/effects";
import {
  getTodoListAsync,
  createTodoAsync,
  removeTodoAsync,
  updateTodoAsync,
} from "../../api";
import { getTodos, addTodo, removeTodo, changeTodo } from "../todoSlice";

export function* fetchTodosWorker() {
  try {
    const data = yield call(getTodoListAsync);
    yield put({ type: getTodos.type, payload: data });
  } catch (e) {
    yield put({ type: "TODOS_FETCH_FAILED", message: e.message });
  }
}

export function* fetchAddTodoWorker(action) {
  try {
    const data = yield call(createTodoAsync, action.payload);
    yield put({ type: addTodo.type, payload: data });
  } catch (e) {
    yield put({ type: "TODO_ADD_FETCH_FAILED", message: e.message });
  }
}

export function* fetchRemoveTodoWorker(action) {
  try {
    const data = yield call(removeTodoAsync, action.payload);
    yield put({ type: removeTodo.type, payload: data });
  } catch (e) {
    yield put({ type: "TODO_REMOVE_FETCH_FAILED", message: e.message });
  }
}

export function* fetchChangeTodo(action) {
  try {
    const data = yield call(updateTodoAsync, action.payload);
    yield put({ type: changeTodo.type, payload: data });
  } catch (e) {
    yield put({ type: "TODO_REMOVE_FETCH_FAILED", message: e.message });
  }
}
