import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';

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
          <h2>Welcome to React Markdown Previewer</h2>
        </div>

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
      <div className="col-md-6 Input">
        <textarea rows={22} onChange={this.handleInput} value={input}>
        </textarea>
      </div>
    );
  }
}

class OutputArea extends Component {
  markedText(value) {
    const markedOutput = marked(value, {pedantic: true});
    return {__html: markedOutput};
  }

  render() {
    const output = this.props.userInput;

    return (
      <div className="col-md-6 Output">
        <span dangerouslySetInnerHTML={this.markedText(output)}></span>
      </div>
    );
  }
}

class MarkdownContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
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
      <div className="MarkdownContainer">
        <InputArea userInput = {this.state.userInput} onInputChange = {this.handleUserInput} />
        <OutputArea userInput = {this.state.userInput}/>
      </div>
    );
  }
}

export default App;
