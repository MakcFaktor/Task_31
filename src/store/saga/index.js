import { call, all } from "redux-saga/effects";
import { todoWatcher } from "./watchers";

export function* rootSaga() {
  yield all([call(todoWatcher)]);
}
