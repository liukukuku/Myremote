import React from 'react'
import { Layout, } from 'antd'
import Headers from "@/components/Headers"
import Siders from '@/components/Siders'
import Breadcrumbs from '@/components/Breadcrumbs'
import Contents from '@/components/Contents'

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
