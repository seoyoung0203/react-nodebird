import React from 'react';
import { Input, Button, Form } from 'antd';
import { useSelector } from 'react-redux';

const PostForm = () => {

    const { imgPaths } = useSelector(state => state.post);

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
            {imgPaths.map((v) => {
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
};

export default PostForm;