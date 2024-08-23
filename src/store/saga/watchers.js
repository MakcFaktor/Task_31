import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  fetchAddTodoWorker,
  fetchTodosWorker,
  fetchRemoveTodoWorker,
  fetchChangeTodo,
} from "./workers";

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_ADD_TODO_REQUEST = "FETCH_ADD_TODO_REQUEST";
export const FETCH_REMOVE_TODO_REQUEST = "FETCH_REMOVE_TODO_REQUEST";
export const FETCH_CHANGE_TODO_REQUEST = "FETCH_CHANGE_TODO_REQUEST";

export function* todoWatcher() {
  yield takeEvery(FETCH_TODOS_REQUEST, fetchTodosWorker);
  yield takeEvery(FETCH_ADD_TODO_REQUEST, fetchAddTodoWorker);
  yield takeEvery(FETCH_REMOVE_TODO_REQUEST, fetchRemoveTodoWorker);
  yield takeLatest(FETCH_CHANGE_TODO_REQUEST, fetchChangeTodo);
}
