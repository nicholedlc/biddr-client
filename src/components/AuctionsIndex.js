import React from 'react';

function AuctionsIndex({auctions, onAuctionClick = () => {}}) {
  return (
    <div>
      {auctions.map(auction =>
        // <div key={auc.id} style={style}>
        //   <div>
        //     <strong>{auc.title}<span> #{auc.id}</span></strong>
        //   </div>
        //   <div>{auc.details}</div>
        //   <div>{auc.endsOn}</div>
        //   <div>{auc.reservePrice}</div>
        // </div>
        <AuctionShow
          auction={auction}
          key={auction.id}
          onClick={onAuctionClick}
        />
       )}
    </div>
  )
}

function AuctionShow ({ auction, onClick = () => {} }) {
  const {title} = auction;
  const style={
    margin: '1rem 1rem',
    padding: '1rem 1rem',
    border: 'thin solid gainsboro',
  }
  const handleClick = event => {
    event.preventDefault();
    // rather than saying `props.onClick`, can give auction as parameter to the callback. this callback can be passed around as variable containing the object auction, which in turn can be used to access props (e.g. id, title...)
    onClick(auction);
  }

  return (
    <div className="AuctionShow" style={style}>
      <div>
        {/* onClick --> similar to the ...addEventListener('click', fn...) */}
        <div onClick={handleClick}> {title}</div>
      </div>
    </div>
  )
}

export default AuctionsIndex;
