import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';
import { connect } from 'react-redux'
export default connect(
    () => ({}),
    {

    }
)(index)
function index(props) {
    const [form] = Form.useForm();
    const { setVisibleFN, visible, onCreate, } = props
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={()=>{
                setVisibleFN(false)
            }}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                        setVisibleFN(false)
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    rules={[
                        {
                            required: true,
                            message: 'Please input the title of collection!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input type="textarea" />
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    )
}