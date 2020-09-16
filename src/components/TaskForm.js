import React, { Component } from 'react';

class TaskForm extends Component{

    state = {
        title:'',
        description:''
    }

    onSubmit = e =>{
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description);
    }
    
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });

    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Write a Task" 
                        name="title" 
                        className="form-control" 
                        onChange={this.onChange}
                        value={this.state.title}
                    />
                </div>
                <div className="form-group">
                    <textarea 
                        placeholder="Write a description" 
                        name="description" 
                        className="form-control"
                        onChange={this.onChange}
                        value={this.state.description}
                    ></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Save Task</button>
                </div>
            </form>
        );
    }
}

export default TaskForm;