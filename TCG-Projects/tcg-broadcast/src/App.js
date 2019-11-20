import React from 'react';
import Post from './Components/Post';
import PostForm from './Components/PostForm';
import {Provider} from 'react-redux';
import store from './store';

function App() {

  return (
    <Provider store={store}>
    <div className="App">
      <header className="Header">TCG Broadcast</header>
      <PostForm />
      <Post />
    </div>
    </Provider>
  );
}

export default App;
