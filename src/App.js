import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

/*
  Structure:
  - MarkdownContainer (Contains the entire structure)
    -InputArea (Window for typing text)
    -OutputArea (Outputs markdowned text)
*/

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <MarkdownContainer />

      </div>
    );
  }
}

class InputArea extends Component {
  constructor(props) {
    super(props);
    //this.state = { input: this.props.userInput };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.props.onInputChange(e.target.value);
  }

  render() {
    const input = this.props.userInput;
    return (
      <div className="col-md-6">
        <textarea rows={22} cols={66} onChange={this.handleInput} value={input}>
        </textarea>
      </div>
    );
  }
}

class OutputArea extends Component {
  render() {
    const output = this.props.userInput;
    return (
      <div className="col-md-6">
        marked({output})
      </div>
    );
  }
}

class MarkdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "Heading \n======= \nSub-heading \n----------- \n### Another deeper heading \nParagraphs are separated \nby a blank line. \nLeave 2 spaces at the end of a line to do a \nline break \nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ . \nShopping list: \n* apples \n* oranges \n* pears \nNumbered list: \n1. apples \n2. oranges \n3. pears \nThe rain---not the reign---in \nSpain. \n*[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(newInput) {
    this.setState({
      userInput: newInput
    });
  }

  render() {
    return (
      <div>
        <InputArea userInput = {this.state.userInput} onInputChange = {this.handleUserInput} />
        <OutputArea userInput = {this.state.userInput}/>
      </div>
    );
  }
}

export default App;
