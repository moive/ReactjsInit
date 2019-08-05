import React from 'react';
// import logo from './logo.svg';
import './App.css';

/*function Helloworld(props){
  return (
    <div>
      <h3>{props.subtitle}</h3>
      {props.text}
    </div>
  )
}*/

class Helloworld extends React.Component{
  state = {
    show:true
  }

  toggleShow = () => {
    this.setState({show: !this.state.show});
  }
  render(){
    if(this.state.show){
      return (
        <div>
          <h3>{this.props.subtitle}</h3>
            {this.props.text}
            <button onClick={this.toggleShow}>Toggle Show</button>
        </div>
      );
    }else{
      return (<h1>There are not elements <button  onClick={this.toggleShow}>Toggle Show</button></h1>);
    }
  }
}

function App() {
  return <div>
    This is my component: 
    <Helloworld text="Hi..!" subtitle="Lorem ipsum"/> 
    <Helloworld text="Hola" subtitle="subtitle 2"/> 
    <Helloworld text="Hello" subtitle="This is a sub title"/>
  </div>
}

export default App;
