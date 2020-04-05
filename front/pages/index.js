import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';
import { loginAction } from "../reducers/user";


// 타임라인 역할
const Home = () => {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.user);
    const { mainPosts } = useSelector(state => state.post);

    console.log(user);

    useEffect( () => {
        dispatch(loginAction);
    }, []);

    return (
        <>
            { isLoggedIn ? <div>{user.nickname}님 반갑습니다.</div> : <div>로그아웃  상태</div>}
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
