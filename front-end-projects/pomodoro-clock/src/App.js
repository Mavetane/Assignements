import React, { Component } from 'react';
import './App.css';
import Session from './components/Session'
// import Break from './components/Break'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
    }
  }
 

  render() {
    return (
      <div className="App">
        <header className="App-header">Pomodoro clock</header>
        <div className="Components">
          {/* <div className="Break-App"><Break /></div> */}
          <div className="Session-App"><Session /></div>
        </div>
      </div>
    );
  }
}
App.propTypes = {

};

export default App;
