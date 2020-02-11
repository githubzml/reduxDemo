
//仓库
//compose 用作增强函数
import { createStore, applyMiddleware,compose } from 'redux'
//注入
import reducer from "./reducer"
// import thunk from "redux-thunk"
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas"
const sagaMiddleware = createSagaMiddleware();

//redux-thunk
// const store = createStore(reducer, applyMiddleware(thunk))

//redux-saga
const store = createStore(reducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(mySaga);


export default store;