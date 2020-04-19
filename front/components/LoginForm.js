import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Input } from "antd";
import { LOG_IN_REQUEST } from "../reducers/user";
import Link from "next/link";

const LoginForm = () => {

    const dispatch = useDispatch();

    // const useInput = (initValue) => {
    //     const [value, setter] = useState(initValue);
    //     const handler = useCallback((e) => {
    //         setter(e.target.value);
    //     }
    // }, [value, handler]);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const { isLoggingIn } = useSelector(state => state.user);

    const onChangeId = useCallback ((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
           type: LOG_IN_REQUEST,
            data: {
               userId: id,
               password: password
            }
        });
    },[id, password]);


    return (
        <>
            <Card>
                <Form onSubmit={onSubmit}>
                    <div>
                        <label>ID</label>
                        <Input name="userId" required value={id} onChange={onChangeId}/>
                    </div>
                    <div>
                        <label>PW</label>
                        <Input name="userPassword" type="password" value={password} onChange={onChangePassword}/>
                    </div>
                    <br/>
                    <div>
                        <Button type="primary" onClick={onSubmit} loading={isLoggingIn}>Login</Button>
                        <Link href="/signup"><Button style={{ float : 'right' }}>SignUp</Button></Link>
                    </div>
                </Form>
            </Card>
        </>
    );
};

export default LoginForm;