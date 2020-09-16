import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './Task';

class Tasks extends Component{
    render(){
        return <ul className="list-group">
            {
                this.props.tasks.map((task) => <Task task={task} key={task.id} deleteTask={this.props.deleteTask} checkDone={this.props.checkDone} />)
            }
        </ul>
    };
};

Tasks.propTypes = {
    tasks:PropTypes.array.isRequired
};
export default Tasks;