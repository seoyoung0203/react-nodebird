import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import LoginForm from './LoginForm';
import UserProfile from './UserProfile';


const AppLayout = ({ children }) => {

    const { isLoggedIn } = useSelector(state => state.user);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>NodeBird</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item >
                    <Input.Search
                        placeholder="search"
                        enterButton
                        style={{ verticalAlign: "middle" }}
                    />
                </Menu.Item>
                <Link href="/signup"><Button type="link">SignUp</Button></Link>
            </Menu>
            <Row gutter={13}>
                <Col xs={24} md={5} style={{ padding : 10 }}>
                    {isLoggedIn ?
                        <UserProfile/>
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