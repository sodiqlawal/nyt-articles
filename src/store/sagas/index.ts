import { spawn } from "redux-saga/effects";
import articleSaga from "./articleSaga";

function* rootSaga() {
  yield spawn(articleSaga);
}

export default rootSaga;
