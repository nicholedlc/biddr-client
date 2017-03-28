import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auctions: []
    }
  }

  componentDidMount () {
    fetch('http://localhost:3000/api/auctions')
      .then(r => r.json())
      .then(({auctions}) => this.setState({auctions}))
      .catch(console.info)
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
