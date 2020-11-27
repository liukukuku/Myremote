import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons'
import { NavLink, } from "react-router-dom"
import Headers from "@/components/Headers"
import Siders from '@/components/Siders'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contents from '@/components/Contents'
const { SubMenu } = Menu
const { Content, Sider } = Layout

function Index(props) {
    return (
        <Layout>
            <Headers></Headers>
            <Layout>
                <Siders></Siders>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumbs></Breadcrumbs>
                    <Contents children={props.children}></Contents>
                </Layout>
            </Layout>
        </Layout>
    )
}

export default Index
