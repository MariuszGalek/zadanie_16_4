import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <li>
                <p>{this.props.singleData.text}</p>
                <button onClick={() => this.props.removeItem(this.props.singleData.id)}><i className="fa fa-window-close fa-2x"></i></button>
            </li>
        );
    }
}

export default Todo;