import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
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

axios.defaults.baseURL = 'http://localhost:8081/api';

function* loginAPI(loginData) {
    return axios.post('/user/login', loginData, {
        withCredentials: true, // 서로 쿠키를 주고받을 수 있게 됨
    });
}

function logoutAPI() {
    return axios.post('/user/logout');
}

function signUpAPI(signUpData) {
    return axios.post('/user/', signUpData);
}

function* login(action) {
    try {
        const result = yield call(loginAPI, action.data);
        console.log('로그인 정보', result.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
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
           error: e
        });
    }
}

function* signUp(action) {
    try{
        const result = yield call(signUpAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data
        });
    } catch(e) {
        console.log(e);
        yield put({
           type: SIGN_UP_FAILURE,
            error: e
        });
    }
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogout() {
    yield takeLatest(LOG_OUT_REQUEST, logout);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogout),
        fork(watchSignUp),
    ]);
}