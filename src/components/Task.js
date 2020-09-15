import React, { Component } from 'react';

class Task extends Component {
    isDone(){
        return this.props.task.done;
    }
    render() {
        const { task } = this.props;
        return <div style={this.styleCompleted()}>
            {task.title} - {task.description} - {task.done} - {task.id}
            <input type="checkbox" disabled={this.isDone()} />
            <button style={btnDelete} className="btn btn-danger" disabled={this.isDone()}>x</button>
        </div>
    };

    styleCompleted(){
        return {
            color: this.isDone() ? 'gray' : 'black',
            textDecoration: this.isDone() ? 'line-through' : 'none'
        }
    }
}

const btnDelete = {
    fontSize: '25px',
    fontWeight: 'bold'
}

export default Task;