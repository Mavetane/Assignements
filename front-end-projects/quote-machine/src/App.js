import React from 'react';
// import logo from './logo.svg';
import Quote from './components/Quote'
import './App.css';
import Quotebox from './components/Quotebox';


function App() {
  console.log('render 2')
  return (
    <div className="App" >
      <Quotebox/>
    </div>
  );
}

export default App;
