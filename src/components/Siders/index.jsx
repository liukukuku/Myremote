import React from 'react'
import { Layout, Menu, } from 'antd'
import { UserOutlined, } from '@ant-design/icons'
import { NavLink, withRouter, } from "react-router-dom"
const { SubMenu } = Menu
const { Sider } = Layout
function index(props) {
    return (
        <Sider width={200} className="site-layout-background">
            <Menu
                mode="inline"
                selectedKeys={[props.location.pathname]}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                    <Menu.Item key="/Index/Home">
                        <NavLink to="/Index/Home">Home</NavLink>
                    </Menu.Item>
                    <Menu.Item key="/Index/List">
                        <NavLink to="/Index/List">List</NavLink>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    )
}

export default withRouter(index)
