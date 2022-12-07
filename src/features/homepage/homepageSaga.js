import { call, put, delay, takeLatest } from "redux-saga/effects";
import {
  fetchGitHubInfo,
  fetchGitHubInfoSuccess,
  fetchGitHubInfoError,
} from "./homepageSlice";
import { getGitHubInfo } from "./getGitHubInfo";

function* fetchGitHubInfoHandler() {
  try {
    yield delay(2000);
    const gitHubInfo = yield call(getGitHubInfo);
    yield console.log(gitHubInfo);
    yield put(fetchGitHubInfoSuccess(gitHubInfo));
  } catch {
    yield put(fetchGitHubInfoError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchGitHubInfo.type, fetchGitHubInfoHandler);
}
