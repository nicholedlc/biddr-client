import React, { Component } from 'react';
import './App.css';
import AuctionsIndex from './AuctionsIndex';
import AuctionNew from './AuctionNew';

const BASE_URL = 'http://localhost:3000/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auctions: []
    }
    this.postAuction = this.postAuction.bind(this);
    this.handleAuctionClick = this.handleAuctionClick.bind(this);
  }

  getAuctions () {
    fetch(`${BASE_URL}/auctions`)
      .then(r => r.json())
      .then(({auctions}) => this.setState({auctions}))
      .catch(console.info)
  }

  postAuction (auction) {
    console.info(auction)
    fetch(
      `${BASE_URL}/auctions`,
      {
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(auction)
      }
    )
    .then(r => r.json())
    .then(r => console.info(r))
    .then(() => {
      this.getAuctions()
    })
    .catch(console.error)
  }

  handleAuctionClick({id}) {
    const {auctions} = this.state;
    auctions.map(e => {
      if(e.id === id) console.log(e);
    });
  }

  componentDidMount () {
    this.getAuctions();
  }

  render() {
    const {auctions} = this.state;
    return (
      <div className="App">
        <h1>AUCTIONS</h1>
        <AuctionNew onSubmit={this.postAuction}/>
        <AuctionsIndex auctions={auctions} onAuctionClick={this.handleAuctionClick} />
      </div>
    );
  }
}

export default App;
