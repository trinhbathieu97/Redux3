import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Todos />
    </div>
  );
}

export default App;
