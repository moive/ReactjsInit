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

  render(){
    return <div className="container">
      <TaskForm/>
      <Tasks tasks={tasks}/>
    </div>
  }
}

export default App;
