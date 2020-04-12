import { all, call, put, takeLatest, fork, delay } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_IN_REQUEST,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE, SIGN_UP_REQUEST
} from "../reducers/user";

function* loginAPI() {
    //axios.get('/login');
}

function logoutAPI() {

}

function signupAPI() {

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
        yield call(logoutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch(e) {
        yield put({
           type: LOG_OUT_FAILURE,
        });
    }
}

function* signup() {
    try{
        yield call(signupAPI);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch(e) {
        yield put({
           type: SIGN_UP_FAILURE,
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignup() {
    yield takeLatest(SIGN_UP_REQUEST, signup);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignup),
    ]);
}