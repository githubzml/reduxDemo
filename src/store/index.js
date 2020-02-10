
//仓库
import { createStore } from 'redux'
//注入
import reducer from "./reducer"
const store = createStore(reducer)

export default store;