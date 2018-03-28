import React, {Component} from 'react';
import './App.css';

class GetData extends Component {
  
  constructor(props){
    super(props);
    this.state = {isLoading: true}
  }

  getImages() {
    
    fetch('https://api.finna.fi/v1/search?lookfor=&filter[]=~format%3A"0%2FImage%2F"&filter[]=~topic_facet%3A"autot"&type=AllFields')
    .then(response => response.json())  
    .then(parsedJSON => parsedJSON.records.map(img => (
            {
              url: `${img.onlineUrls[0].url}`
            }
        )))
        .then(contacts => this.setState({
            contacts,
            isLoading: false
        }))
        .catch(error => console.log('parsing failed', error))

  }
  
  render(){
    return(
      <div>
        <div className="btn btn-sm btn-danger" onClick={(e) => {this.getImages();}}>
          Play me
        </div>
        <p>{url}</p>
      </div>
    );
  }
}

export default GetData;
