import React, { useEffect } from "react"
import { Table, Tag, Button } from "antd"
import { connect } from "react-redux"
import { homefun } from "@/actions/Home"
import FormModel from '@/components/FormModel'
function Index(props) {
    const { list, homefun, } = props
    const [selectedRowKeys, setselectedRowKeys] = React.useState([])
    const [selectedRows, setselectedRows] = React.useState([])
    const [str, setstr] = React.useState(0)
    const [visible, setVisible] = React.useState(false);
    useEffect(() => {
        homefun()
        let newselectedRowKeys = selectedRowKeys.filter(v => {
            return v !== str
        })
        setselectedRowKeys(newselectedRowKeys)

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
    function log(ids) {
        let arr = selectedRows.filter(v=>{
            return v.id!==ids
        })
        let brr = selectedRowKeys.filter(v=>{
            return v!==ids
        })
        setstr(ids)
        setselectedRows([...arr])
        setselectedRowKeys([...brr])
    }

    function setVisibleFN(item){
        setVisible(item)
    }

    function onCreate(values){
        console.log('Received values of form: ', values);
        setVisible(false);
      };
    return (
        <div>
            <FormModel visible={visible} setVisibleFN={setVisibleFN} onCreate={onCreate}></FormModel>
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
                <Button onClick={()=>{
                    setVisible(true)
                }}>添加</Button>
            </div>


            <Table
                rowKey="id"
                pagination={{
                    pageSize: 5
                }}
                rowSelection={{
                    selectedRowKeys: selectedRowKeys,
                    onChange: (selectedRowKeys, selectedRows) => {
                        setselectedRowKeys(selectedRowKeys)
                        setselectedRows(selectedRows)
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
