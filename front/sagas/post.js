import { all, call, fork, takeLatest, put } from 'redux-saga/effects';
import { ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE } from '../reducers/post';

function postAPI() {

}

function* post() {
    try {
        yield call(postAPI);
        yield put({
            type: ADD_POST_SUCCESS
        })
    } catch (e) {
        yield put({
            type: ADD_POST_FAILURE
        })
    }
}

function* watchPost() {
    yield takeLatest(ADD_POST_REQUEST, post);
}

export default function* postSaga() {
    yield all([
        fork(watchPost),
    ]);
}