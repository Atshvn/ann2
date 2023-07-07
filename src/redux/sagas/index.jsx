import { fork } from "redux-saga/effects";

import watchMainActionSagas from "./MainAction.jsx";

export default function* rootSaga() {
    yield fork(watchMainActionSagas);
}
