import React from 'react';
import Head from 'next/Head';
import AppLayout from '../components/AppLayout';

const Profile = () => {
    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <div>
                    프로필
                </div>
            </AppLayout>
        </>
    );
};

export default Profile;