import React from 'react';
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import Head from "next/dist/next-server/lib/head";
import AppLayout from "../components/AppLayout";
import rootSaga from "../sagas";

const NodeBird = ({ Component, store }) => {
    return (
        <Provider store={store}>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </Provider>
    );
};

NodeBird.propTypes = {
    // propsTypes -> props 를 잘 받고 있는지 검사
    // 만약 props를 숫자로 받게 설정 -> 부모가 문자열을 준다면 콘솔에 에러
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

// store 를 생성해서 보냄
export default withRedux((initialState, options) => {
    // 여기에 store 커스터마이징 추가
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];

    // redux devtools 사용
    const enhancer = process.env.MODE_ENV === 'production'
        ? compose(
            applyMiddleware(...middlewares))
        : compose(
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
})(NodeBird);