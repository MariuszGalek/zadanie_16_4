import React from 'react';
import style from './TodoForm.css';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newItem: '',
        };
    }
    onChange(event) {
        this.setState({newItem: event.target.value});
    }
    handleKeyUp(event) {
        if (event.keyCode === 13) {
            this.onSubmit;
        }
    }
    onSubmit(event) {
        event.preventDefault();
        if (this.state.newItem) {
            this.props.addNewItem(this.state.newItem);
        } else this.setState({error: 'enter the task name'});
    }
    render() {
        return (
            <div className={style.TodoForm}>
                <form onSubmit={event => this.onSubmit(event)}>
                    <input
                    ref={input => input && input.focus()}
                    type="text"
                    placeholder="Add new task"
                    onChange={event => this.onChange(event)}
                    onKeyUp={event => this.handleKeyUp(event)}
                    value={this.state.newItem}/>
                    <button type="submit"><i className="fa fa-plus"></i></button>
                </form>
            </div>
        );
    }
}

export default TodoForm;