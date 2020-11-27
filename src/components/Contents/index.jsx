import React from 'react'
import { Layout, } from 'antd'
const { Content } = Layout
function index(props) {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}
        >
            {
                props.children
            }
        </Content>
    )
}

export default index
