import React , { useState } from 'react';
import Head from 'next/Head';
import { Form , Button, Input, Checkbox } from 'antd';
import AppLayout from '../components/AppLayout';

const Signup = () => {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault;
        console.log({
            id,
            nickname,
            password,
            passwordCheck,
            term
        });
    };

    const onChangeId = (e) => {
        setId(e.target.value);
    };

    const onChangeNickName = (e) => {
        setNickname(e.target.value);
    };

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordCheck(e.target.value);
    };

    const onChangeTerm = (e) => {
        console.log(term);
        setTerm(e.target.checked);
    };

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
            </Head>
            <AppLayout>
                <div>
                    <Form onSubmit={onSubmit} style={{ padding : 20, maxWidth: 500 }}>
                        <div>
                            <label>ID</label>
                            <Input name="userId" value={id} required onChange={onChangeId}/>
                        </div>
                        <div>
                            <label>NickName</label>
                            <Input name="userNickname" value={nickname} required onChange={onChangeNickName}/>
                        </div>
                        <div>
                            <label>Password</label>
                            <Input name="userPassword" value={password} type="password" required onChange={onChangePassword}/>
                        </div>
                        <div>
                            <label>Password Check</label>
                            <Input name="userPasswordCheck" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                        </div>
                        <br/>
                        <div>
                            <Checkbox name="userTerm" value={term} required onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                        </div>
                        <br/>
                        <div>
                            <Button type="primary" htmlType="submit" onSubmit={onSubmit}>Send</Button>
                        </div>
                    </Form>
                </div>
            </AppLayout>
        </>
    );
};

export default Signup;