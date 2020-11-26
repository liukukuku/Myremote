import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.less'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Home from '@/pages/Home'
import List from '@/pages/List'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
      <Route exact path="/Login" component={Login}></Route>
      <Route exact path="/Reg" component={Reg}></Route>
      {/* <Route path="*" render={()=>{
        if (sessionStorage.getItem("auth")) {
          return (
            <Switch> */}
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/list" component={List}></Route>
            {/* </Switch>  
          )
        } else {
          return (
            <Redirect to="/Login"></Redirect>  
          )
        }
      }}></Route> */}
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById('root')
)
