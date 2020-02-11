import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST,GET_MY_LIST } from "./actionTypes"
import axios from 'axios';
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM
})
export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const getListAction = (list) => ({
    type: GET_LIST,
    list
})
//redux-thunk
export const getListData = () => {
    return (dispatch) => {
        axios.get("http://rap2api.taobao.org/app/mock/244099/oreact").then(res => {
            console.log(111, res)
            const action = getListAction(res.data.arr);
            dispatch(action);
        }).catch((error) => {
            console.log(error)
        })
    }
}
//redux-saga
export const getMyListAction = () => ({
    type:GET_MY_LIST
})