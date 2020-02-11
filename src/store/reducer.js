import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from "./actionTypes"
const defaultState = {
    inputValue: "write something",
    list: [
    ]
};
export default (state = defaultState, action) => {
    // Reducer 里只能接受state 不能改变state
    //实时获取input 输入框的值
    if (action.type === CHANGE_INPUT) {
        //深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type === ADD_ITEM) {
        //深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = "";
        return newState;
    }
    if (action.type === DELETE_ITEM) {
        //深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index, 1);
        return newState;
    }
    if (action.type === GET_LIST) {
        //深拷贝
        let newState = JSON.parse(JSON.stringify(state));
        newState.list = action.list;
        return newState;
    }
    return state;
}