import React, { Component } from 'react';
import './App.css';
import menu from './assets/menu.svg';

class App extends Component {
  constructor(){
    super()

    this.state = {
      toggle: false
    }
  }
  render() {
    return (
      <div className="header">

       <div className="logo"> Start Bootstrap </div>

      <div className="navbar">
         
          <img src={menu} alt="Vegan Burger Menu" 
              onClick={() => this.setState({toggle: !this.state.toggle})}
          />
          <div className={`nav ${this.state.toggle ? 'toggle' : null}`}>  
              <li>Services</li>
              <li>Portfolio</li>
              <li>About</li>
              <li>Team</li>
              <li>Contact</li>
          </div>
  
   </div>
  
  
      </div>
    )
  }
}

export default App;
