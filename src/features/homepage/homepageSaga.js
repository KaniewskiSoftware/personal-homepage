import { takeLatest, call, put, delay } from "redux-saga/effects";
import {
  fetchGitHubRepos,
  fetchGitHubReposSuccess,
  fetchGitHubReposError,
} from "./homepageSlice";
import { getGitHubRepos } from "./getGitHubRepos";

function* fetchGitHubReposHandler() {
  try {
    yield delay(2000);
    const gitHubRepos = yield call(getGitHubRepos);
    yield put(fetchGitHubReposSuccess(gitHubRepos));
  } catch {
    yield put(fetchGitHubReposError());
  }
}

export function* homepageSaga() {
  yield takeLatest(fetchGitHubRepos.type, fetchGitHubReposHandler);
}
