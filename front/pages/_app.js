import React from 'react';
import PropTypes from 'prop-types';
import Head from "next/dist/next-server/lib/head";
import AppLayout from "../components/AppLayout";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <Component />
            </AppLayout>
        </>
    );
};

NodeBird.propTypes = {
    // propsTypes -> props 를 잘 받고 있는지 검사
    // 만약 props를 숫자로 받게 설정 -> 부모가 문자열을 준다면 콘솔에 에러
    Component: PropTypes.elementType,
};

export default NodeBird;