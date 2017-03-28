import React, { Component } from 'react';
import './App.css';
import AuctionsIndex from './AuctionsIndex';

const BASE_URL = 'http://localhost:3000/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auctions: []
    }
  }

  getAuctions () {
    fetch(`${BASE_URL}/auctions`)
      .then(r => r.json())
      .then(({auctions}) => this.setState({auctions}))
      .catch(console.info)
  }

  componentDidMount () {
    this.getAuctions();
  }

  render() {
    const {auctions} = this.state;
    return (
      <div className="App">
        <h1>AUCTIONS</h1>
        <AuctionsIndex auctions={auctions}/>
      </div>
    );
  }
}

export default App;
