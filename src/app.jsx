import React, { Component } from 'react';
import TopSpot from './topspot';
const axios = require('Axios')
 
class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }
  
  componentWillMount() {
    axios
    .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
    .then(response => response.data)
    .then(topspots => this.setState({ topspots }));
  }
  
  render() {
    return (
        <div className='App container'>
        <div className="jumbotron jumbotron-fluid">
            <div className='container'>
            <h1 className="display-4 text-center headerFont">San Diego Top Spots</h1>
            <p className="lead text-center">A list of the top 30 places to see in San Diego, California.</p>
          </div>
          </div>

          {this.state.topspots.map(topspot => (
          
               <TopSpot
                  key={topspot.id}
                  name={topspot.name}
                  description={topspot.description}
                  location={topspot.location} />
                  ))
                }
        </div>
      
          
           );
  }
}

export default App;
