import React, { Component } from 'react';

class Tasks extends Component{
    render(props){
        return this.props.tasks.map((e)=><p key={e.id}>
                {e.title} - {e.description} - {e.done} - {e.id}
                <input type="checkbox"/>
                <button className="btn btn-danger">x</button>
            </p>)
    }
}

export default Tasks;