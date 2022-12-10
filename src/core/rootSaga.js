import { all } from "redux-saga/effects";
import { homepageSaga } from "../features/homepage/homepageSaga";
import { themeSaga } from "../common/themeSaga";

export default function* rootSaga() {
  yield all([homepageSaga(), themeSaga()]);
}
