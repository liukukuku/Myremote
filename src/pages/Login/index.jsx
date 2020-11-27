import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { SETLOGINUSER } from '@/actions/Loginactions'
import { connect } from 'react-redux'
export default connect(
  () => ({}),
  {
    SETLOGINUSER
  }
)(index)
function index (props){
  const onFinish = (values) => {
    props.SETLOGINUSER(values).then(res=>{
        if (res.payload.data.status*1===200) {
            props.history.push('/Index')
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

          <Form.Item valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}