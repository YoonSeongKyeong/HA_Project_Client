import React from 'react';
import { Route } from 'react-router-dom'
import { MainPage, TodoInPage, PostInPage } from './pages';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={MainPage} />
        <Route path="/users" component={TodoInPage} />
        <Route path="/posts" component={PostInPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
