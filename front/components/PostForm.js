import React, { useCallback, useState, useEffect } from 'react';
import { Input, Button, Form } from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_POST_REQUEST} from "../reducers/post";

const PostForm = () => {

    const { imgPaths, addPost } = useSelector(state => state.post);
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        setText('');
    },[addPost === true]);

    const onPost = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_POST_REQUEST,
            data: {
                text
            }
        })
    }, []);

    const onChangeText = useCallback((e) => {
        setText(e.target.value);
    }, []);

    return (
        <Form>
            <Input.TextArea
                placeholder="오늘의 이야기를 적어보세요"
                maxLength={140}
                autoSize={{ minRows: 4, maxRows: 4 }}
                value={text}
                onChange={onChangeText}
            />
            <div style={{ padding: 10}}>
                <Button >Image</Button>
                <Button type="primary" style={{ float : 'right'}} onClick={onPost}>Post</Button>
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