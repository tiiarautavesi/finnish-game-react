import React, {Component} from 'react';
import './App.css';
//import './App.js';
import Title from "./Game/game-title";
import GetData from "./api-search.js";

var title;
var int = 4;
    var words = {
      "Home": [ // category
        "pöytä",
        "keittiö",
        "jääkaappi",
        "tuoli",
        "sohva",
        "kaappi"
      ],
      "People": [
        "nainen",
        "mies",
        "lapsi",
        "perhe",
        "vauva",
        "vanhus"
      ],
      "Devices": [
        "lentokone",
        "auto",
        "puhelin",
        "tietokone",
        "juna",
        "raitiovaunu"
      ],
      "Food": [
        "liha",
        "peruna",
        "tomaatti",
        "banaani",
        "omena",
        "appelsiini"
      ],
      "Clothes": [
        "paita",
        "housut",
        "kengät",
        "sukat",
        "takki",
        "hattu"
      ],
      "Random": [
        "kello",
        "meri",
        "kaupunki",
        "lehmä",
        "auto",
        "mies"
      ]
    };

class Game extends Component {
  
  handleChange(e) {
    title = e.target.value;
    this.props.changeTitle(title);
    console.log(words[title][int]);
    console.log(int);
  }
  
  
  render() {
    return ( 
      <div>
        <Title title={this.props.title} />
        <select className="categoriesSelection" onChange={this.handleChange.bind(this)}>
            <option>Select a category!</option>
            <option>Home</option>
            <option>People</option>
            <option>Devices</option>
            <option>Food</option>
            <option>Clothes</option>
            <option>Random</option>
        </select>
        <div>
          <GetData />  
        </div>

      <br />
      </div>
    );
  }
}

export default Game;
