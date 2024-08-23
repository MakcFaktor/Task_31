import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import todo from "./todoSlice";
import { rootSaga } from "./saga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    todo,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);
