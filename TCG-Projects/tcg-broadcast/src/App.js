import React from 'react';
import PostForm from './Components/PostForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Post from './Components/Post'



function App() {
    return (
        <Router>
            <Switch>
        <div className="App" >
            <header className="Header" >
                <h1 > TCG Broadcast </h1>
                <div className="Nav-bar" >
                    <a href="http://localhost:3000/" > Home </a>
                    <a href="http://mavetane.github.io" > Developer</a>
                    <a href="http://thecodingground.com/" > website </a>
                </div>
            </header>
        
            <div>
                <Route exact path="/" component={PostForm} /> 
                <Route path="/Post" component={Post} />
            </div>
        </div>
        </Switch>
        </Router>
    );
}

export default App;