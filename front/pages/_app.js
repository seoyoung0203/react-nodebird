import React from 'react';
import PropTypes from 'prop-types';
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import reducer from '../reducers';
import withRedux from 'next-redux-wrapper';
import Head from "next/dist/next-server/lib/head";
import AppLayout from "../components/AppLayout";

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
    const middlewares = [];

    // redux devtools 사용
    const enhancer = compose(
        applyMiddleware(...middlewares),
        typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);