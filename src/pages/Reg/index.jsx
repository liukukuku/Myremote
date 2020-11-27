import React from 'react'
import { Form, Input, Button, } from 'antd';
import { SETREGUSER } from '@/actions/Regactions'
import { connect } from 'react-redux'
export default connect(
    () => ({}),
    {
        SETREGUSER
    }
)(index)
function index(props) {
    const onFinish = (values) => {
        props.SETREGUSER(values).then(res => {
            console.log(res)
            if (res.payload.data.status * 1 === 200) {
                props.history.push('/Login')
            }
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="Login">
            <div className="MyAccountLogin">
                <h1>My  Account  Login</h1>
                <p>have a nice day</p>
            </div>
            <div className="FormLoginbox">
                <Form
                    name="basic"
                    className="FormLogin"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="pwd"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <Button type="primary" htmlType="submit">
                            注册
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}