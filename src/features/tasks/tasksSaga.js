import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  delay,
} from "redux-saga/effects";
import {
  fetchExampleTasks,
  fetchExampleTasksSuccess,
  selectTasks,
  fetchExampleTasksError,
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
  try {
    yield delay(2000);
    const exampleTasks = yield call(getExampleTasks);
    yield put(fetchExampleTasksSuccess(exampleTasks));
  } catch (error) {
    yield put(fetchExampleTasksError(error));
  }
}

function* saveTasksInlocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* watchFetchExampleTasks() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
  yield takeEvery("*", saveTasksInlocalStorageHandler);
}
