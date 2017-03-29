import React from 'react';

function AuctionsIndex({auctions, onAuctionClick = () => {}}) {
  const handleClick = id => event => {
      onAuctionClick(id);
  };
  const style={
    margin: '1rem 1rem',
    padding: '1rem 1rem',
    border: 'thin solid gainsboro',
  }
  return (
    <div className="AuctionIndex">
      {auctions.map(auction => (
        <div key={auction.id} onClick={handleClick(auction.id)} style={style}>
          <div>
            <strong>{auction.title}<span> #{auction.id}</span></strong>
          </div>
          <div>{auction.details}</div>
        </div>
      ))}
    </div>
  )
}

export default AuctionsIndex;
