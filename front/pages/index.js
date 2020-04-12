import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';
import { loginAction } from "../reducers/user";


// 타임라인 역할
const Home = () => {

    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    return (
        <>
            <div style={{ padding: 10 }}>Hello, FRIEND!</div>
            {isLoggedIn &&
                <PostForm/>
            }
            {mainPosts.map( (post) => {
                return (
                    <MainPost key={post} post={post} />
                );
            })}
        </>
    );
};

export default Home;
