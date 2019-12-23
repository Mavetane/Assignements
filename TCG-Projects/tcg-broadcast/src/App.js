import React from 'react';
import PostForm from './Components/PostForm';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Post from './Components/Post'



function App() {
    return (
        <Router>
            <Switch>
        <div className="App" >
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