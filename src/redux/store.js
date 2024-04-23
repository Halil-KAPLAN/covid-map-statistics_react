import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import covidReducer from "./covidSlice";
import covidSaga from "./covidSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    covid: covidReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(covidSaga);

export default store;
