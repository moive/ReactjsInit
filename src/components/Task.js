import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Task extends Component {
    isDone(){
        return this.props.task.done;
    }
    render() {
        const { task } = this.props;
        return <li className="list-group-item d-flex justify-content-between2 align-items-center" style={this.styleCompleted()}>
            <input type="checkbox" disabled={this.isDone()} onChange={this.props.checkDone.bind(this, task.id)} />
            <span className="ml-4">{task.title} - {task.description} - {task.done} - {task.id}</span>
            <span style={btnDelete} className="badge badge-primary badge-pill ml-auto" onClick={this.props.deleteTask.bind(this, task.id)}>x</span>
        </li>
    };

    styleCompleted(){
        return {
            color: this.isDone() ? 'gray' : 'black',
            textDecoration: this.isDone() ? 'line-through' : 'none'
        }
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
};

const btnDelete = {
    fontSize: '15px',
    fontWeight: 'bold',
    cursor:'pointer'
}

export default Task;