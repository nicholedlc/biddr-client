import React from 'react';

function AuctionNew({auction, onSubmit = () => {}}) {

  const handleSubmit = event => {
    event.preventDefault();
    const fData = new FormData(event.currentTarget);
    onSubmit({
      title: fData.get('title'),
      details: fData.get('details'),
      endsOn: fData.get('endsOn'),
      reservePrice: fData.get('reservedPrice')
    })
  }

  const style = {
    backgroundColor: 'gainsboro',
    padding: '1rem',
    border: 'thin solid black'
  }

  return (
    <div className="ActionNew" style={style}>
      <h2>Create New Auction</h2>
      <form onSubmit={handleSubmit} className="ActionNew">
        <div>
          <label htmlFor="auctionTitle">Title: </label>
          <input id="auctionTitle" name="title"/>
        </div>
        <div><span>Details: </span>
          <textarea id="auctionDetails" name="details">
          </textarea>
        </div>
          <label htmlFor="endsOn">Ends On: </label>
          <input id="endsOn" name="endsOn" type="date"/>
        <div>
        </div>
          <label htmlFor="auctionReservedPrice">Reserved Price: </label>
          <input id="auctionReservedPrice" name="reservedPrice" type="number" />
        <div>
        </div>
        <div>
          <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default AuctionNew;
