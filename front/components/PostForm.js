import React from 'react';
import { Input, Button, Form } from 'antd';

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

const PostForm = () => {
    return (
        <Form>
            <Input.TextArea
                placeholder="오늘의 이야기를 적어보세요"
                maxLength={140}
                autoSize={{ minRows: 4, maxRows: 4 }}
            />
            <div style={{ padding: 10}}>
                <Button >Image</Button>
                <Button type="primary" style={{ float : 'right'}}>Post</Button>
            </div>
            {testPost.imgPaths.map((v, i) => {
                return (
                    <div key={v} style={{ display: 'inline-block' }}>
                        <img src={'http://localhost:3065' + v} style={{ width: '200px' }}/>
                        <div>
                            <Button>Delete</Button>
                        </div>
                    </div>
                )
            })}
        </Form>
    );
}

export default PostForm;