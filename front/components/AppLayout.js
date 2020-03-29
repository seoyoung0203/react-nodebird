import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button } from 'antd';

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
            {children}
        </div>

    )
};

export default AppLayout;