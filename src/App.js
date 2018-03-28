import React, {
  Component
} from 'react';
import logo from './logo-finl.png';
import './App.css';
import Game from './Game.js';
import Title from "./Game/game-title";

class App extends Component {
  
  // Able toggle of languages
  /*
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
  */
  
  constructor() {
    super();
    this.state = {
      title: "Start by selecting a category from the up left corner.",
    };
  }

  changeTitle(title) {
    this.setState({title});
    console.log(title);
  }
  
  
  render() {
    return ( 
      <div className="App">
        <header className="App-header">
          <img src = {logo} className="App-logo" alt="logo" />
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'NL' : 'FI'}

          </button>
        </header> 
        <h1 className="App-title"> 
          {this.state.isToggleOn ? 'Welcome to learn Dutch!' : 'Welcome to learn Finnish!'}
        </h1> 
        <Game changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Words changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <div className="Images-Holder">
          <div className="Image" data-img="1"></div>
          <div className="Image" data-img="2"></div>
          <div className="Image" data-img="3"></div>
          <div className="Image" data-img="4"></div>
        </div>
      </div>
    );
  }
}

export default App;
