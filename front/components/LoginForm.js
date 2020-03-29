import React, { useState, useCallback } from 'react';
import {Button, Card, Form, Input} from "antd";

const LoginForm = () => {

    // const useInput = (initValue) => {
    //     const [value, setter] = useState(initValue);
    //     const handler = useCallback((e) => {
    //         setter(e.target.value);
    //     }
    // }, [value, handler]);

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback ((e) => {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onSubmit = useCallback((e) => {
        e.preventDefault;
        console.log({
            id,
            password
        })
    },[id, password]);


    return (
        <>
            <Card>
                <Form >
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
                        <Button type="primary" onClick={onSubmit}>Login</Button>
                        <Button>Sign Up</Button>
                    </div>
                </Form>
            </Card>
        </>
    );
};

export default LoginForm;