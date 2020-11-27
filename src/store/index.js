import { createStore, compose, combineReducers, applyMiddleware } from 'redux'
import reducers from '@/reducers'
import promise from 'redux-promise'
// 数据持久化
import { persistReducer } from 'redux-persist' // 数据持久化
import storage from 'redux-persist/lib/storage' // localstorage
// import sessionStorage from 'redux-persistb/storagession' // session
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

const rootPersistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: [], // 白名单
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  persistReducer(rootPersistConfig, combineReducers(reducers)),
  composeEnhancers(applyMiddleware(promise))
)
export default store
