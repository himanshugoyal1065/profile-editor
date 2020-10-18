import React from "react";
import logo from "./logo.svg";
import "./App.css";

class ProfileEditor extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Himanshu",
    };
  }

  render() {
    return (
      <div>
        {/* <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        /> */}
        <InputComponent
          name={this.state.name}
          onChangeEvent={(e) => this.setState({ name: e.target.value })}
        />
        {/* <button onClick={(e) => this.setState({ name: "" })}>Clear</button> */}
        {/* <button onClick = {(e) => this.setState({name : "himanshu"})}>Reset</button>  */}
        <NameButton
          label="Reset"
          onNameButtonClick={() => this.setState({ name: "reset" })}
        />
        <NameButton
          label="Clear"
          onNameButtonClick={() => this.setState({ name: "" })}
        />
        <Greeting name={this.state.name} />
      </div>
    );
  }
}

function InputComponent(props) {
  return <input value={props.name} onChange={(e) => props.onChangeEvent(e)} />;
}
function Greeting(props) {
  return <h1>Hello {props.name}</h1>;
}

function NameButton(props) {
  return <button onClick={props.onNameButtonClick}>{props.label}</button>;
}

function App() {
  return <ProfileEditor />;
}

export default App;
