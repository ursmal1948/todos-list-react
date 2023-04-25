import { all } from "redux-saga/effects";
import { watchFetchExampleTasks } from "./tasksSaga";

export function* rootSaga() {
    yield all([
        watchFetchExampleTasks(),
    ])
}