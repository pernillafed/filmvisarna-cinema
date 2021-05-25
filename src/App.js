import { BrowserRouter, Route } from 'react-router-dom';
import React from "react";

import MovieList from './pages/MovieList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/movie-list" component={MovieList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
