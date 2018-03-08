import React from 'react';
import style from './TodoList.css';
import Todo from './Todo.js';

class TodoList extends React.Component {
    render() {
        return (
            <div className={style.TodoList}>
                <ul>
                    {this.props.data.map(singleData => <Todo key={singleData.id} singleData={singleData} removeItem={this.props.removeItem}/>)}
                </ul>
            </div>
        );
    }
}
export default TodoList;