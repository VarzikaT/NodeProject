import logo from './logo.svg';
import React from "react";
import './App.css';
import Documentation  from './Documentation';
import Counter from './Counter';

function App() {
  return (
    <div className="App">
     <header className="App-header">
      <h2>Welcome to my counter :) </h2>
      <Counter/>
     </header>
    </div>
  );
}

export default App;
