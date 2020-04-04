import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';
import { LOG_OUT, LOG_IN, loginAction } from "../reducers/user";

const testPost = {
    isLoggedIn: true,
    imgPaths: [],
    mainPosts : [{
        User: {
            id: 1,
            nickname: 'seoyoung',
        },
        content: '첫번째 게시글',
        testImg: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/QsT/image/NSTeOeMe0MddpqlJ23FZV7hJGvg'
    }],
};

// 타임라인 역할
const Home = () => {

    const dispatch = useDispatch();
    const { isLoggedIn, user } = useSelector(state => state.user);

    console.log(user);

    useEffect( () => {
        dispatch({
            type: LOG_IN,
            data: {
                nickname: 'seoyoung',
            },
        });

        dispatch({
            type: LOG_OUT,
        });

        dispatch(loginAction);

    }, []);

    return (
        <>
            { isLoggedIn ? <div>{user.nickname}님 반갑습니다.</div> : <div>로그아웃  상태</div>}
            <div style={{ padding: 10 }}>Hello, FRIEND!</div>
            {testPost.isLoggedIn &&
                <PostForm/>
            }
            {testPost.mainPosts.map( (post) => {
                return (
                    <MainPost key={post} post={post} />
                );
            })}
        </>
    );
};

export default Home;
