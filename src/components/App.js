import React, { Component } from 'react';
import './App.css';

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
    const style={
      margin: '1rem 1rem',
      padding: '1rem 1rem',
      border: 'thin solid gainsboro',
    }
    return (
      <div className="App">
        <h1>AUCTIONS</h1>
        <div>
          {auctions.map(auc =>
            <div key={auc.id} style={style}>
              <div>
                <strong>{auc.title}<span> #{auc.id}</span></strong>
              </div>
              <div>{auc.details}</div>
              <div>{auc.endsOn}</div>
              <div>{auc.reservePrice}</div>
             </div>
           )}
        </div>
      </div>
    );
  }
}

export default App;
