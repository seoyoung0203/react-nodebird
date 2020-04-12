import React from 'react';
import { useSelector } from 'react-redux';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';


// 타임라인 역할
const Home = () => {

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
