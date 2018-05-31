import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import StatelessComp from "./components/stateless-component";
import StateComp from "./components/state-component";

class App extends Component {
  state = {
    selectedColor: "green",
    selectedText: "default text"
  };
  changeColor = sel => {
    console.log("selected--->",sel);
    this.setState({ selectedColor: sel.color, selectedText: sel.text });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StateComp onChangeColor={this.changeColor} />
        <StatelessComp color={this.state.selectedColor} text={this.state.selectedText} />
      </div>
    );
  }
}

export default App;
