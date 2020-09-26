import {  take, call, put } from "redux-saga/effects";

// worker saga
function* workerSaga() {
  console.log("Hello you have enterered worker");
  console.log(put({ type: "ACTION_FROM_WORKER" }));
  yield put({ type: "ACTION_FROM_WORKER" });
}

// watcher saga
function* rootSaga() {
  yield take("LOGOUT");
  yield call(workerSaga)
  yield take('LOGIN')
}

export default rootSaga;
