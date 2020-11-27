import React, { useState, useEffect } from 'react'
import { Table, Tag, Button } from 'antd'

function Index() {
    const [selectedRowKeys, setselectedRowKeys] = useState([])
    const [selectedRows, setselectedRows] = useState([])
    const [str, setstr] = useState(0)

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <span>{text}</span>,
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

    const data = [
        {
            id: '1',
            name: 'John Brown',
            age: 32,
        },
        {
            id: '2',
            name: 'Jim Green',
            age: 42,
        },
        {
            id: '3',
            name: 'Joe Black',
            age: 32,
        },
    ];

    useEffect(() => {
        let newselectedRowKeys = selectedRowKeys.filter(v => {
            return v !== str
        })
        setselectedRowKeys(newselectedRowKeys)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [str])



    function log(ids) {
        setstr(ids)
    }

    return (
        <div>
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

            <Table
                rowKey="id"
                rowSelection={{
                    selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows) => {
                        setselectedRowKeys(selectedRowKeys)
                        setselectedRows(selectedRows)
                    }
                }}
                columns={columns}
                dataSource={data} />
        </div>
    )
}

export default Index
