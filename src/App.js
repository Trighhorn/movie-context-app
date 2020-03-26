import React from 'react';
import MovieContextProvider from './contexts/MovieContext';
import Navbar from './components/Navbar';
import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';


function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar />
        <MovieList />
      </MovieContextProvider>
    </div>
  );
}

export default App;
