import React from 'react';
import { Button, Card, Avatar } from 'antd';
import { HeartOutlined , MessageOutlined, MenuOutlined, UserAddOutlined, UserOutlined } from "@ant-design/icons";

const MainPost = ({ post }) => {
      return (
          <Card
              key={post}
              actions={[
                <div key="heart"><HeartOutlined /></div>,
                <div key="message"><MessageOutlined /></div>,
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
          </Card>
      );
};

export default MainPost;