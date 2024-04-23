import { call, put } from "redux-saga/effects";
import { getCovidStatsError, getCovidStatsSuccess } from "../covidSlice";
import { handleGetCovidStats, getCovidStatsApi } from "../covidSaga";
import { describe, expect, test } from "vitest";

describe("covidSaga", () => {
  const countryCode = "US";
  const action = { type: "covid/getCovidStatsFetch", payload: countryCode };

  test("should dispatch getCovidStatsSuccess action on successful API call", () => {
    const generator = handleGetCovidStats(action);

    expect(generator.next().value).toEqual(call(getCovidStatsApi, countryCode));

    const covidStats = [
      {
        country: "US",
        cases: 123456,
        deaths: 7890,
        recovered: 101112,
      },
      {
        country: "UK",
        cases: 65432,
        deaths: 1234,
        recovered: 56789,
      },
    ];

    expect(generator.next(covidStats).value).toEqual(
      put(getCovidStatsSuccess(covidStats))
    );
  });

  test("should dispatch getCovidStatsError action on failed API call", () => {
    const generator = handleGetCovidStats(action);

    expect(generator.next().value).toEqual(call(getCovidStatsApi, countryCode));

    const error = new Error("API Error");
    expect(generator.throw(error).value).toEqual(
      put(getCovidStatsError(error.message))
    );
  });
});
