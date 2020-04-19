import React, { useCallback } from 'react';
import {Avatar, Button, Card} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {

    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const userLogout = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    return (
        <Card style={{backgroundColor: ''}}
              actions={[
                 {/* <div>Post<br/>{me.Post.length}</div>,
                  <div>Follower<br/>{me.Follower.length}</div>,
                  <div>Following<br/>{me.Following.length}</div>,*/}
              ]}
        >
            <Card.Meta
                title={me.nickname}
                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
            />
            <Button onClick={userLogout}>Logout</Button>
        </Card>
    );
};

export default UserProfile;