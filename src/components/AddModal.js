import React, { Component } from 'react'
import { Modal } from 'antd'

export class AddModal extends Component {

    render() {

        const { visible, handleOk, handleCancel } = this.props

        return (
            <>
                <Modal
                    title="Basic Modal"
                    visible={visible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </>
        )
    }
}

export default AddModal
