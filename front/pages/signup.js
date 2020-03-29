import React , { useState, useCallback } from 'react';
import { Form , Button, Input, Checkbox } from 'antd';

const Signup = () => {

    const [id, setId] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const onSubmit =  useCallback((e) => {
        e.preventDefault;
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nickname,
            password,
            passwordCheck,
            term
        });
    }, [password, passwordCheck, term]);

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangeNickName = useCallback((e) => {
        setNickname(e.target.value);
    }, []);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    const onChangePasswordCheck = useCallback((e) => {
        setPasswordError(password !== e.target.value);
        setPasswordCheck(e.target.value);
    }, [password]);

    const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
    }, []);

    return (
        <>
            <div>
                <Form onSubmit={onSubmit} style={{ padding : 20, maxWidth: 500 }}>
                    <div>
                        <label>ID</label>
                        <Input name="userId" value={id} required onChange={onChangeId}/>
                    </div>
                    <div>
                        <label>Nickname</label>
                        <Input name="userNickname" value={nickname} required onChange={onChangeNickName}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <Input name="userPassword" value={password} type="password" required onChange={onChangePassword}/>
                    </div>
                    <div>
                        <label>Password Check</label>
                        <Input name="userPasswordCheck" value={passwordCheck} type="password" required onChange={onChangePasswordCheck} />
                        { passwordError && <div style={{ color: 'red' }}>비밀번호가 틀립니다.</div>}
                    </div>
                    <br/>
                    <div>
                        <Checkbox name="userTerm" value={term} required onChange={onChangeTerm}>약관에 동의합니다.</Checkbox>
                        { termError && <div style={{ color: 'red' }}>약관에 동의하셔야 합니다.</div> }
                    </div>
                    <br/>
                    <div>
                        <Button type="primary" htmlType="submit" onClick={onSubmit}>Send</Button>
                    </div>
                </Form>
            </div>
        </>
    );
};

export default Signup;