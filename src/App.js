import React from 'react'
import Navbar from './pages/Navbar/index'
import Home from './pages/HomePage/Home';
import Footer from './pages/Footer/index'
import './App.css';
import { BrowserRouter as Router, Switch,
Route } from 'react-router-dom';
import Team from './pages/Team/Team';
import Coaching from 'pages/Coaching/Coaching';


function App() {
  return (
    <Router>
      <Navbar /> 
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/team'  component={Team}/>
        <Route path='/coaching' component={Coaching}/>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
