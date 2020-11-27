import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.less'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { Provider } from "react-redux"
import store from "@/store"
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import Home from '@/pages/Home'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login}></Route>
          <Route exact path="/Reg" component={Reg}></Route>
          <Route path="*" render={() => {
            if (sessionStorage.getItem("auth")) {
              return (
                <Switch>
                  <Route exact path="/home" component={Home}></Route>
                </Switch>
              )
            } else {
              return (
                <Redirect to="/Login"></Redirect>
              )
            }
          }}></Route>
        </Switch>
      </BrowserRouter>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
)
