import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd';
import { getData } from '@/actions/List'

export default connect(state => {
  return {
    data: state.ListData
  }
}, {
  getData
})(Index)
function Index(props) {
  const { data } = props
  useEffect(() => {
    props.getData()
  }, [])
  return (
    <div className="ListBox">
      {
        data.data.length !== 0 ?
          data.data.map(v => {
            return (
              <Card key={v.id} className='ListBox-he'>
                <div className="ListBox-img">
                  <img src="./1.png" alt="" />
                </div>
                <div className="ListBox-text">
                  {v.name}<br/><br/>
                  {v.text}
                </div>
              </Card>
            )
          }) : ""
      }

    </div>
  )
}

