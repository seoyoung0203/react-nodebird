import React from 'react';
import { Form, Input, Button, Card, List, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const Profile = () => {
    return (
        <>
            <br />
            <div>
                <Card
                title="닉네임 수정">
                <Form style={{ margin : '10px'}}>
                    <Input ></Input>
                    <Button type="primary" style={{ margin: '10px 10px', float : 'right'}}>수정</Button>
                </Form>
                </Card>
                <br />
                <List
                    title="Follower"
                    dataSource={['seoyoung', 'vvoojin', 'mind-zero']}
                    loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
                    bordered
                    renderItem={item => (
                        <List.Item
                            actions={[<a>delete</a>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
                                title={item}
                            />
                        </List.Item>
                    )}
                />
                <br />
                <List
                    title="Following"
                    dataSource={['seoyoung', 'vvoojin', 'mind-zero']}
                    loadMore={<Button style={{ width: '100%' }}>더보기</Button>}
                    bordered
                    renderItem={item => (
                        <List.Item
                            actions={[<a key="delete">delete</a>]}
                        >
                            <List.Item.Meta
                                avatar={<Avatar size={40} icon={<UserOutlined/>}/>}
                                title={item}
                            />
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};

export default Profile;