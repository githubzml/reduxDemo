import React, { Component } from 'react';
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
import store from "./store";
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from "./store/actionTypes"
import { changeInputAction, addItemAction, deleteItemAction } from "./store/actionCreators";

// const data = [
//     "好好学习",
//     "天天向上",
//     "是的啊"
// ]
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.changeValue = this.changeValue.bind(this);
        this.getCurrentValue = this.getCurrentValue.bind(this);
        this.addItem = this.addItem.bind(this);
        store.subscribe(this.getCurrentValue)
    }
    changeValue(e) {
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        const action = changeInputAction(e.target.value);
        store.dispatch(action);
    }
    getCurrentValue() {
        this.setState(store.getState());
    }
    addItem() {
        // const action = {
        //     type: ADD_ITEM
        // }
        const action = addItemAction();
        store.dispatch(action);
    }
    deleteItem(index) {
        // const action = {
        //     type: DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index);
        store.dispatch(action);
    }
    render() {
        let { list, inputValue } = this.state
        return (<div style={{ margin: "10px" }}>
            <div>
                <Input placeholder={inputValue} style={{ width: '250px', marginRight: "10px" }}
                    onChange={this.changeValue}
                    value={inputValue}
                />
                <Button type="primary" onClick={this.addItem}>增加</Button>
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered
                    dataSource={list}
                    renderItem={(item, index) => (<List.Item onClick={this.deleteItem.bind(this, index)}>{item}</List.Item>)}
                ></List>
            </div>
        </div>);
    }
}

export default TodoList;