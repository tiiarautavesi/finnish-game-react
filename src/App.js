import React, {
  Component
} from 'react';
import logo from './logo-finl.png';
import './App.css';

class App extends Component {
  render() {
    return ( 
      <div className = "App">
      <header className = "App-header">
        <img src = {logo} className = "App-logo" alt = "logo" />
      </header> 
        <h1 className = "App-title" > Welcome to React </h1> 
        <p className = "App-intro">
          Im touching it 
        </p> 
      </div>
    );
  }
}

export default App;
