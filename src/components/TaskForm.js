import React, { Component } from 'react';

class TaskForm extends Component{

    state = {
        title:'',
        description:''
    }

    onSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
    }
    
    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        });

    }
    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    placeholder="Write a Task" 
                    name="title" 
                    className="form-control" 
                    onChange={this.onChange}
                    value={this.state.title}
                />
                <textarea 
                    placeholder="Write a description" 
                    name="description" 
                    className="form-control"
                    onChange={this.onChange}
                    value={this.state.description}
                ></textarea>
                <button type="submit" className="btn btn-primary">Save Task</button>
            </form>
        );
    }
}

export default TaskForm;