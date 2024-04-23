import { beforeEach, describe, expect, test } from "vitest";
import covidReducer, {
  getCovidStatsFetch,
  getCovidStatsSuccess,
  getCovidStatsError,
} from "../covidSlice";

describe("covidSlice", () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      covidStats: [],
      error: null,
    };
  });

  test("getCovidStatsFetch action should set loading to true", () => {
    const nextState = covidReducer(initialState, getCovidStatsFetch());
    expect(nextState).toEqual({
      ...initialState,
      loading: true,
    });
  });

  test("getCovidStatsSuccess action should set covidStats and loading correctly", () => {
    const mockData = { data: ["stat1", "stat2"] };
    const nextState = covidReducer(
      initialState,
      getCovidStatsSuccess(mockData)
    );
    expect(nextState).toEqual({
      ...initialState,
      covidStats: mockData.data,
      loading: false,
    });
  });

  test("getCovidStatsError action should set error and loading correctly", () => {
    const mockError = "Error occurred";
    const nextState = covidReducer(initialState, getCovidStatsError(mockError));
    expect(nextState).toEqual({
      ...initialState,
      error: mockError,
      loading: false,
    });
  });
});
