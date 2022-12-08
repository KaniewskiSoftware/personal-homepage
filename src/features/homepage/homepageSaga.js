import { takeLatest, call, put, delay, select } from "redux-saga/effects";
import {
  fetchGitHubRepos,
  fetchGitHubReposSuccess,
  fetchGitHubReposError,
  selectDarkMode,
  toggleDarkMode,
} from "./homepageSlice";
import { getGitHubRepos } from "./getGitHubRepos";
import { saveDarkModeInLocalStorage } from "./darkModeLocalStorage";

function* fetchGitHubReposHandler() {
  try {
    yield delay(2000);
    const gitHubRepos = yield call(getGitHubRepos);
    yield put(fetchGitHubReposSuccess(gitHubRepos));
  } catch {
    yield put(fetchGitHubReposError());
  }
}

function* saveDarkModeInLocalStorageHandler() {
  const darkMode = yield select(selectDarkMode);
  yield call(saveDarkModeInLocalStorage, darkMode);
}

export function* homepageSaga() {
  yield takeLatest(fetchGitHubRepos.type, fetchGitHubReposHandler);
  yield takeLatest(toggleDarkMode.type, saveDarkModeInLocalStorageHandler);
}
