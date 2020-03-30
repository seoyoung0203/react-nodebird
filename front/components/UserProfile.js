import React from 'react';
import { Avatar, Card } from "antd";
import { UserOutlined } from "@ant-design/icons";

const testUser = {
    nickname: 'seoyoung',
    Post: [],
    Following: [],
    Follower: [],
    isLoggedIn: false,
};


const UserProfile = () => {
    return (
        <Card style={{backgroundColor: ''}}
              actions={[
                  <div>Post<br/>{testUser.Post.length}</div>,
                  <div>Follower<br/>{testUser.Follower.length}</div>,
                  <div>Following<br/>{testUser.Following.length}</div>,
              ]}
        >
            <Card.Meta
                title={testUser.nickname}
                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
            />
        </Card>
    );
};

export default UserProfile;