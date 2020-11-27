import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd';
import { getData } from '@/actions/List'

export default connect(
  (state) => ({ data: state.ListData }),
  {
    getData
  })
  (Index)
function Index(props) {

  useEffect(() => {
    props.getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="ListBox">
      {
        props.data.data.length !== 0 ?
          props.data.data.map(v => {
            return (
              <Card key={v.id} className='ListBox-he'>
                <div className="ListBox-img">
                  <img src="/1.png" alt="" />
                </div>
                <div className="ListBox-text">
                  {v.name}<br /><br />
                  {v.msg}
                </div>
              </Card>
            )
          }) : ""
      }

    </div>
  )
}

