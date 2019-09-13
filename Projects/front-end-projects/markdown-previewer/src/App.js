import React, { Component } from 'react';
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';
// import Hints from './components/Hints'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: "",
      rows: 1,
      newLine: ""
    }

  }
  updateMarkdown = markdown => {
    this.setState({
      markdown
    })
  }
  keyPressed(event) {
    var increaseRows = this.state.rows;
    if (event.key === "Enter") {
      increaseRows += 1;
      this.setState({
        rows: increaseRows,
        newLine: "<br/>"
      })
    }
    this.setState({
      newLine: ""
    })
  }
  render() {
    let { markdown } = this.state;
    let marked = require("marked");
    console.log(markdown);
    return (
      <div className="App container">
        <div>
          <FormGroup controlId="formControlsTextarea">
            <h3 className="H3">Markdown Input</h3>
            <br />
            <textarea className="Input" rows={this.state.rows} onKeyPress={(event) => this.keyPressed(event)} placeholder="Enter text"
              value={markdown} onChange={(event) => this.updateMarkdown(event.target.value)}></textarea>
          </FormGroup>
        </div>
              {/* <div className= "Hints"></div><Hints/> */}
        <div className="Output">
          <h2 className="H2">Markdown Output</h2>
          <br />
          <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
        </div>

      </div>
    );
  }
}

App.propTypes = {

};

export default App;
