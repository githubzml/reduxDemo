//状态组件
// import React, { Component } from 'react';
// import { Input, Button, List } from "antd";
// import "antd/dist/antd.css";
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {}
//     }
//     render() {
//         let { list, inputValue, changeValue, addItem, deleteItem } = this.props;
//         return (<div style={{ margin: "10px" }}>
//             <div>
//                 <Input placeholder={inputValue} style={{ width: '250px', marginRight: "10px" }}
//                     onChange={changeValue}
//                     value={inputValue}
//                 />
//                 <Button type="primary" onClick={addItem}>增加</Button>
//             </div>
//             <div style={{ margin: "10px", width: "300px" }}>
//                 <List
//                     bordered
//                     dataSource={list}
//                     renderItem={(item, index) => (<List.Item onClick={() => { deleteItem(index) }}>{item}</List.Item>)}
//                 ></List>
//             </div>
//         </div>);
//     }
// }

// export default TodoListUI;
//无状态组件 UI组件
import React from 'react';
import { Input, Button, List } from "antd";
import "antd/dist/antd.css";
const TodoListUI = (props) => {
    let { list, inputValue, changeValue, addItem, deleteItem } = props;
    return (<div style={{ margin: "10px" }} >
        <div>
            <Input placeholder={inputValue} style={{ width: '250px', marginRight: "10px" }}
                onChange={changeValue}
                value={inputValue}
            />
            <Button type="primary" onClick={addItem}>增加</Button>
        </div>
        <div style={{ margin: "10px", width: "300px" }}>
            <List
                bordered
                dataSource={list}
                renderItem={(item, index) => (<List.Item onClick={() => { deleteItem(index) }}>{item}</List.Item>)}
            ></List>
        </div>
    </div >);
}


export default TodoListUI;