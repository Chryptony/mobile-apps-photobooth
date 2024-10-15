import react from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  MainContent2
}from './components'

function App() {
  return (
    <div className="main-page">
      <Navbar></Navbar>
      <MainContent2></MainContent2>
    </div>
  );
}

export default App;