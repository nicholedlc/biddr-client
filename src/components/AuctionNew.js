import React from 'react';

function AuctionNew({auction}) {

  return (
    <form>
      <div>
        <label htmlFor="auctionTitle">Title: </label>
        <input id="auctionTitle" name="title"/>
      </div>
      <div>
        <textarea id="auctionDetails" name="details">
        </textarea>
      </div>
        <label htmlFor="auctionEndsOn">Ends On: </label>
        <input id="auctionEndsOn" name="endsOn" type="date"/>
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
  )
}

export default AuctionNew;
