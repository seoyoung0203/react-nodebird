import React from 'react';
import Link from 'next/link';
import Head from 'next/Head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <Link href="/about"><a>About</a></Link>
                <div>Hello, Next!</div>
            </AppLayout>
        </>
    );
};

export default Home;
