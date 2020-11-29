import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { connect } from 'react-redux';
import { AddFn } from '../actions/Add';

const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {

    const [form] = Form.useForm();

    return (
        <Modal
            visible={visible}
            title="Basic Modal"
            okText="确定"
            cancelText="取消"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log(info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
            >
                <Form.Item
                    name="name"
                    label="姓名"
                    rules={[
                        {
                            required: true,
                            message: '请填写姓名!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="age"
                    label="年龄"
                    rules={[
                        {
                            required: true,
                            message: '请填写年龄!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="msg"
                    label="地址"
                    rules={[
                        {
                            required: true,
                            message: '请填写地址!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

const CollectionsPage = (props) => {

    const { visible, handleOk, handleCancel, AddFn } = props
    const onCreate = (values) => {
        console.log(values);
        AddFn(values).then(res => {
            const { status } = res.payload.data
            if (status * 1 === 200) {
                message.success("添加成功")
            }else{
                message.error("添加失败")
            }
        })
        handleOk(false);
    };

    return (
        <div>
            <CollectionCreateForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    handleCancel(false);
                }}
            />
        </div>
    );
};

export default connect(
    null,
    {
        AddFn
    }
)(CollectionsPage)