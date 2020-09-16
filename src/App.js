import React, {Component} from 'react';
import './App.css';
import tasks from './sample/tasks.json';

//components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';

class App extends Component{
  state = {
    tasks
  }

  addTask = (title, description)=>{
    const newTask = {
      title,
      description,
      id: this.state.tasks.length
    };
    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  deleteTask = (id)=>{
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({
      tasks: newTasks
    });
  }

  checkDone = ()=> {
    //
  }
  render(){
    return <div className="container">
      <TaskForm addTask={this.addTask} />
      <Tasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
    </div>
  }
}

export default App;
