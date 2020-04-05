import React, { useCallback } from 'react';
import {Avatar, Button, Card} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../reducers/user";

const UserProfile = () => {

    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userLogout = useCallback(() => {
        dispatch(logoutAction);
    }, []);

    return (
        <Card style={{backgroundColor: ''}}
              actions={[
                  <div>Post<br/>{user.Post.length}</div>,
                  <div>Follower<br/>{user.Follower.length}</div>,
                  <div>Following<br/>{user.Following.length}</div>,
              ]}
        >
            <Card.Meta
                title={user.nickname}
                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
            />
            <Button onClick={userLogout}>Logout</Button>
        </Card>
    );
};

export default UserProfile;