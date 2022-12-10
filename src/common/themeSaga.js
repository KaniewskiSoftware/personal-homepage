import { select, call, takeLatest } from "redux-saga/effects";
import { toggleIsDarkMode, selectIsDarkMode } from "./themeSlice";
import { saveIsDarkModeInLocalStorage } from "./isDarkModeLocalStorage";

function* saveIsDarkModeInLocalStorageHandler() {
  const isDarkMode = yield select(selectIsDarkMode);
  yield call(saveIsDarkModeInLocalStorage, isDarkMode);
}

export function* themeSaga() {
  yield takeLatest(toggleIsDarkMode.type, saveIsDarkModeInLocalStorageHandler);
}
