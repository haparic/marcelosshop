import React, {Component} from 'react';
import Pics from './components/Pics';
import About from './components/About';
import Landing from './components/Landing';
import Services from './components/Services';
import { Route, Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="Header">
        <h1>Marcelos Barber Shop</h1>
        <div>
        <nav>
             <Link to='/'>Home</Link>
             <Link to='/about'>About Us</Link>
             <Link to='/services'>Services</Link>
        </nav>
        </div>
      </header>
      <main>
        <Route exact path="/" component={Landing} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
      </main>
      <div>
        <Pics />
      </div>
    </div> 
  )} }

export default App;


