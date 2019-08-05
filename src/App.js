import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  return <div>
    This is my component: 
    <Helloworld text="Hi..!" subtitle="Lorem ipsum"/> 
    <Helloworld text="Hola" subtitle="subtitle 2"/> 
    <Helloworld text="Hello" subtitle="This is a sub title"/>
  </div>
}

function Helloworld(props){
  return (
    <div>
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  )
}

export default App;
