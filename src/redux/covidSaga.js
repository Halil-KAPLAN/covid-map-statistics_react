import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { getCovidStatsError, getCovidStatsSuccess } from "./covidSlice";

export const getCovidStatsApi = async (countryCode) => {
  try {
    const { data } = await axios.request({
      method: "GET",
      url: `https://${import.meta.env.VITE_COVID_STAT_URL}/reports`,
      params: { iso: countryCode },
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_COVID_STAT_API_KEY,
        "X-RapidAPI-Host": import.meta.env.VITE_COVID_STAT_URL,
      },
    });
    return data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error.message || "Something went wrong!"
    );
  }
};

export function* handleGetCovidStats(action) {
  try {
    const covidStats = yield call(getCovidStatsApi, action.payload);
    yield put(getCovidStatsSuccess(covidStats));
  } catch (error) {
    yield put(getCovidStatsError(error.message));
  }
}

function* covidSaga() {
  yield takeEvery("covid/getCovidStatsFetch", handleGetCovidStats);
}

export default covidSaga;
