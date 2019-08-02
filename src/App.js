import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
    return <div>This is my component: <Helloworld/></div>
  }
}

function Helloworld(){
  return (
    <div>Hello World</div>
  )
}

export default App;
