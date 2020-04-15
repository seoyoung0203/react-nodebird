import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { Button, Card, Avatar, Input, List } from 'antd';
import { HeartOutlined , MessageOutlined, MenuOutlined, UserAddOutlined, UserOutlined, SearchOutlined } from "@ant-design/icons";
import  { ADD_COMMENT_REQUEST } from '../reducers/post';


const MainPost = ({ post }) => {
    const dispatch = useDispatch();
    const { commentList } = useSelector(state => state.post);

    const [commentFormOpen, setCommentFormOpen] = useState(false);
    const [commentText, setCommentText] = useState('');

    const onClickComment = useCallback(() => {
        if(commentFormOpen) {
            setCommentFormOpen(false);
        } else {
            setCommentFormOpen(true);
        }
    }, [commentFormOpen]);

    const onChangeComment = useCallback((e) => {
        e.preventDefault();
        setCommentText(e.target.value);
    }, [commentText]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: ADD_COMMENT_REQUEST,
            data: commentText
        });
    }, []);

      return (
          <>
              <Card
                  key={post}
                  actions={[
                    <div key="heart"><HeartOutlined /></div>,
                    <div key="comment" onClick={onClickComment}><MessageOutlined /></div>,
                    <div key="else"><MenuOutlined /></div>,
                  ]}
                  cover={<img alt="example" src={post.testImg}
                              style={{ maxHeight: 500}}
                  />}
              >
                <Button style={{ float: 'right' }}><UserAddOutlined /></Button>
                <Card.Meta
                    title={post.User.nickname}
                    avatar={<Avatar size={30} icon={<UserOutlined/>}/>}
                    description={post.content}
                />
                  <List
                      itemLayout="horizontal"
                      dataSource={commentList}
                      style={{ margin: '15px 5px 5px 20px' }}
                      renderItem={item => (
                          <List.Item>
                              <List.Item.Meta
                                  avatar={<Avatar icon={<UserOutlined/>} />}
                                  title={<a href="https://ant.design">{item.title}</a>}
                                  description={item.content}
                              />
                          </List.Item>
                      )}
                  />
              </Card>

              {commentFormOpen && (
                  <>
                      <Input placeholder="input text"
                             onSearch={value => console.log(value)}
                             enterButton="send"
                             value={commentText}
                             onChange={onChangeComment}
                      />
                      <Button type="primary" shape="circle" icon={<SearchOutlined />} onClick={onSubmit}/>
                  </>
              )}
              <br />
          </>
      );
};

MainPost.PropTypes = {
    post: PropTypes.node,
};

export default MainPost;