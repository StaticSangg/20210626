import './App.css';
import React, { Component } from 'react';
import MyMovie from './MyMovie';


class App extends Component {
  render () {
      return (
        <div>
          <MyMovie title = "콰이어트 플레이스 " 
          running ="90"></MyMovie>

          <MyMovie running = "100"></MyMovie>
        </div>
      );
  }
}

export default App;