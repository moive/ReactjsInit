import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';

//components
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts'

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

  checkDone = (id)=> {
    const newTasks = this.state.tasks.map(task => {
      if(task.id === id)  task.done = !task.done;
      return task;
    });

    this.setState({
      tasks: newTasks
    });
  }
  render(){
    return <div className="container">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Route path="/" exact render={()=>{
          return <div>
            <TaskForm addTask={this.addTask} />
            <Tasks 
              tasks={this.state.tasks} 
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone} 
            />
          </div>
        }}>
        </Route>
        <Route path="/posts" component={Posts} />
      </Router>
    </div>
  }
}

export default App;
