import React, { useState } from 'react'
import { Button } from 'antd'
import AddModal from '@@/AddModal'

function Index() {

    const [visible, setVisible] = useState(false)

    function showModal() {
        setVisible(true)
    }

    function handleOk() {
        setVisible(false)
    }

    function handleCancel() {
        setVisible(false)
    }

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Open Modal
            </Button>
            <AddModal visible={visible} handleOk={handleOk} handleCancel={handleCancel} />
        </div>
    )
}

export default Index
