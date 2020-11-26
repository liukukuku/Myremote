import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getData } from '@/actions/List'

export default connect(state => {
  console.log(state)
  return {
    data:state.ListData
  }
}, {
getData
})(Index)
function Index(props) {
  useEffect(()=>{
    props.getData()
  },[])
  return (
    <div>

    </div>
  )
}

