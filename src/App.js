import React, { Component } from 'react'
import './App.css'
import Navbar from './Components/Navbar';
import News from './Components/News';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <News pageSize={5} country="in" category="sports" />      
      </div>
    )
  }
}

export default App;

