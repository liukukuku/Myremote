import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import Login from '@/pages/Login'
import Reg from '@/pages/Reg'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import store from '@/store'
import Index from '@/pages/Index'
import Home from '@/pages/Home'
import List from '@/pages/List'
import '@/styles/index.less'
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
                <Index>
                  <Switch>
                    <Route exact path="/Index/Home" component={Home}></Route>
                    <Route exact path="/Index/List" component={List}></Route>
                    <Redirect to="/Index/Home"></Redirect>
                  </Switch>
                </Index>
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
  </Provider>,
  document.getElementById('root')
)
