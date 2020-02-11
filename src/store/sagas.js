import {takeEvery,put} from 'redux-saga/effects'
import {GET_MY_LIST} from "./actionTypes"
import {getListAction} from "./actionCreators"
import axios from "axios";
function* mySaga(){
    // 生命周期执行GET_MY_LIST  等待监听 GET_MY_LIST 再执行 getList
    yield takeEvery(GET_MY_LIST,getList)
}
function* getList(){
    const res = yield axios.get("http://rap2api.taobao.org/app/mock/244099/oreact")
    const action = getListAction(res.data.arr);
    yield put(action)
}
export default mySaga;