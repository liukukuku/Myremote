import React from 'react'
import { Table, Tag, Space, Button } from 'antd'
import { connect } from "react-redux"
import { homefun } from "@/actions/Home"
function Index(props) {
    const { list } = props
    const [selectedRowKeys, setselectedRowKeys] = React.useState([])
    const [selectedRows, setselectedRows] = React.useState([])
    const [str, setstr] = React.useState(0)

    React.useEffect(() => {
        props.homefun()
    }, [])

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            key: 'address',
            render: (val) => {
                let bol = selectedRowKeys.some(v => {
                    return (v === val.id)
                })
                return (
                    <div>
                        <input disabled={bol} type="text" placeholder="Basic usage" />
                    </div>
                )
            }
        },
        {
            title: 'Action',
            key: 'action',
            render: (val) => {
                let bol = selectedRowKeys.some(v => {
                    return (v === val.id)
                })
                return (
                    <div>
                        <Button disabled={bol}>编辑</Button>
                        <Button disabled={bol}>删除</Button>
                    </div>
                )
            }
        },
    ];

    React.useEffect(() => {
        let newselectedRowKeys = selectedRowKeys.filter(v => {
            return v !== str
        })
        setselectedRowKeys(newselectedRowKeys)
    }, [str])



    function log(ids) {
        setstr(ids)
    }

    return (
        <div>
            <div className="hometop">
                <div className="tag">
                    Tags:
                    {
                        selectedRows.map((v, i) => {
                            return (
                                <Tag key={i} closable onClose={() => { log(v.id) }}>
                                    {v.name}
                                </Tag>
                            )
                        })
                    }
                </div>
                <Button>添加</Button>
            </div>


            <Table
                rowKey="id"
                rowSelection={{
                    selectedRowKeys: selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows) => {
                        setselectedRowKeys(selectedRowKeys)
                        setselectedRows(selectedRows)
                        // console.log(selectedRowKeys, selectedRows)
                    }
                }}
                columns={columns}
                dataSource={list} />
        </div>
    )
}

export default connect((state) => {
    return { list: state.HomeList.data }
}, {
    homefun
})(Index)
