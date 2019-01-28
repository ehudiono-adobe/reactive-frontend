import React, { Component } from 'react';
import logo from './logo.svg';
import {styles} from './App.css';

import NavBarComponent from './components/NavBar/NavBarComponent'
import WindowComponent from './components/WindowComponent/WindowComponent'

import { BrowserRouter, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className = "rootElement">
         <NavBarComponent/>

      </div>
    );
  }
}

export default App;
