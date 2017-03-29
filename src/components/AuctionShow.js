import React from 'react';

function AuctionShow (props, {onBidSubmit = () => {}}) {
  const { auction, onBackClick = () => {} } = props;
  const {bids = [], title = '', details= '', endsOn = '', reservePrice = ''} = auction;
  // console.table(bids);
  const style={
    margin: '1rem 1rem',
    padding: '1rem 1rem',
    border: 'thin solid gainsboro',
  }
  const handleBidSubmit = event => {
    event.preventDefault();
    const fData = new FormData(event.currentTarget);
    onBidSubmit({
      bid: fData.get('bid')
    })
  }
  return (
    <div className="AuctionShow" style={style}>
      <a onClick={onBackClick} href="#"> Back </a>
      <h2>Title: {title}</h2>
      <div>Details: {details}</div>
      <div>Ends On: {endsOn}</div>
      <div>Reserve Price: {reservePrice}</div>
      <h3>Make a Bid</h3>
      <form onSubmit={handleBidSubmit} className="newBid">
        <label htmlFor="bid"></label>
        <input id="bid" name="bid" type="number" />
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
      <h4>Previous Bids</h4>
      <div className="bids">
        {bids.map((bid) => {
          return (<div key={bid.id}>
            ${bid.bid} at {bid.createdAt}
          </div>)
        })}
      </div>
    </div>
  )
}

export default AuctionShow;
