import React, { Component } from 'react';
import './App.css';
import AuctionsIndex from './AuctionsIndex';
import AuctionNew from './AuctionNew';
import AuctionShow from './AuctionShow';

const BASE_URL = 'http://localhost:3000/api'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auctions: [],
      auction: null
    }
    this.postAuction = this.postAuction.bind(this);
    this.getAuction = this.getAuction.bind(this);
  }

  getAuctions () {
    fetch(`${BASE_URL}/auctions`)
      .then(r => r.json())
      .then(({auctions}) => this.setState({auctions}))
      .catch(console.info)
  }

  getAuction(id) {
    fetch(`${BASE_URL}/auctions/${id}`)
      .then(r => r.json())
      .then(auction => this.setState(auction))
    }

  postAuction (auction) {
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

  postBid () {
    
  }

  componentDidMount () {
    this.getAuctions();
  }

  render() {
    const {auctions, auction} = this.state;
    let view = '';
    if(auction !== null) {
      view = (
        <AuctionShow
          onBackClick={event => {
            event.preventDefault();
            this.setState({auction: null});
          }}
          auction={auction || {}}
          onBidSubmit={this.postBid}
        />
      )
    } else {
      view = (
        <div>
          <AuctionNew onSubmit={this.postAuction}/>
          <AuctionsIndex
            onAuctionClick={this.getAuction}
            auctions={auctions}
          />
        </div>
      )
    }
    return (
      <div className="App">
        <h1>AUCTIONS</h1>
        {view}
      </div>
    );
  }
}

export default App;
