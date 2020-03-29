import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col, Card, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';

const testUser = {
    nickname: 'seoyoung',
    Post: [],
    Following: [],
    Follow: [],
    isLoggedIn: false,
};

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>NodeBird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item>
                    <Input.Search
                        placeholder="search"
                        enterButton
                        style={{ verticalAlign: "middle" }}
                    />
                </Menu.Item>
                <Link href="/signup"><Button type="link">SignUp</Button></Link>
            </Menu>

            <Row>
                <Col xs={24} md={6} style={{ padding : 10}}>
                    {testUser.isLoggedIn ?
                        <Card style={{backgroundColor: ''}}
                              actions={[
                                  <div>Post<br/>{testUser.Post.length}</div>,
                                  <div>Follw<br/>{testUser.Follow.length}</div>,
                                  <div>Following<br/>{testUser.Following.length}</div>,
                              ]}
                        >
                            <Card.Meta
                                title={testUser.nickname}
                                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
                            />
                        </Card>
                        :
                       <LoginForm/>
                    }
                </Col>
                <Col xs={24} md={12}> {children} </Col>
            </Row>
        </div>

    )
};

// node => 코드안에 속하는 모든것을 이야기 함 ( 태그, 문자열 ... 등등 )
AppLayout.propTypes = {
    children: PropTypes.node,
};

export default AppLayout;