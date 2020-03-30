import React from 'react';
import PostForm from '../components/PostForm';
import MainPost from '../components/MainPost';

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
    return (
        <>
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
