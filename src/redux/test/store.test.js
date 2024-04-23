import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../covidSlice";
import rootSaga from "../covidSaga";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

describe("store", () => {
  let store;

  beforeEach(() => {
    const sagaMiddleware = createSagaMiddleware();
    store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
    });
    sagaMiddleware.run(rootSaga);
  });

  afterEach(() => {
    store.dispatch({ type: "RESET_STORE" });
  });

  test("should have initial state", () => {
    const initialState = store.getState();
    expect(initialState).toEqual({
      loading: false,
      covidStats: [],
      error: null,
    });
  });

  test("should dispatch action and update state", () => {
    const action = { type: "covid/getCovidStatsFetch", payload: "US" };
    store.dispatch(action);

    const updatedState = store.getState();
    expect(updatedState.loading).toBe(true);
  });

  test("should update state after successful data fetching", async () => {
    const action = { type: "covid/getCovidStatsFetch", payload: "TUR" };
    store.dispatch(action);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const updatedState = store.getState();
    expect(updatedState.loading).toBe(false);
    expect(updatedState.covidStats.length).toBeGreaterThan(0);
    expect(updatedState.error).toBe(null);
  });

  test("should update state after failed data fetching", async () => {
    const action = {
      type: "covid/getCovidStatsFetch",
      payload: "INVALID_COUNTRY_CODE",
    };
    store.dispatch(action);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const updatedState = store.getState();
    expect(updatedState.loading).toBe(false);
    expect(updatedState.covidStats.length).toBe(0);
    expect(updatedState.error).not.toBe(null);
  });
});
