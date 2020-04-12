import { all, call, put, takeLatest, fork, delay } from 'redux-saga/effects';
import axios from 'axios';
import {LOG_IN_SUCCESS, LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE } from "../reducers/user";

function* loginAPI() {
    //axios.get('/login');
}

function logoutAPI() {

}

function* login() {
    try {
        yield call(loginAPI);
        yield put({
            type: LOG_IN_SUCCESS,
        });
    } catch(e) {
        console.error(e);
        yield put({
            type: LOG_IN_FAILURE,
        });
    }
}

function* logout() {
    try{
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch(e) {
        yield put({
           type: LOG_OUT_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
    ]);
}