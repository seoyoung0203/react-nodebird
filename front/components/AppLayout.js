import React from 'react';
import { Menu, Input } from 'antd';
import { UserOutlined, QqOutlined } from '@ant-design/icons';

const AppLayout = ({ children }) => {
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><QqOutlined />NodeBird</Menu.Item>
                <Menu.Item key="profile"><UserOutlined />Profile</Menu.Item>
                <Menu.Item>
                    <Input.Search
                        placeholder="input search text"
                        enterButton
                        style={{ verticalAlign: "middle" }}
                    />
                </Menu.Item>
            </Menu>
            {children}
        </div>
    )
};

export default AppLayout;