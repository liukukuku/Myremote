import React from 'react'
import { Layout, Menu, } from 'antd'
import { UserOutlined, } from '@ant-design/icons'
import { NavLink, } from "react-router-dom"
const { SubMenu } = Menu
const { Sider } = Layout
function index() {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="1">
                        <NavLink to="/Index/Home">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <NavLink to="/Index/List">List</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default index
