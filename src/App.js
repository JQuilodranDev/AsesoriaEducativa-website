import React from 'react'
import Navbar from './pages/Navbar/index'
import Hero from './pages/Hero/index'
import './App.css';
import { BrowserRouter as Router, Switch,
Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <section className="main">
      <Navbar /> 
      <Hero />
      </section>
      <Switch>
        <Route path='/' />
      </Switch>
    </Router>
  );
}

export default App;
