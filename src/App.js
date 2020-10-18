import React from 'react';
import logo from './logo.svg';
import './App.css';

class ProfileEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      name : "himanshu"
    };
  }

  render () {
    return (
      <div>
        <input value={this.state.name}
          onChange = {(e) => this.setState({name : e.target.value})} />
        <button onClick = {(e) => this.setState({name : ""})}>Clear</button>
        <button onClick = {(e) => this.setState({name : "himanshu"})}>Reset</button> 
        <h1>hello {this.state.name}</h1>
        <h2>{this.state.name.length}</h2>
      </div>
    )
  }
}

// function Greeting() {
//   return (
//     <div>Hello {this.state.name}</div>
//   )
// }

function App() {
  return (
   <ProfileEditor />
  );
}

export default App;
