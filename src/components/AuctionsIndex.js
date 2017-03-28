import React from 'react';

function AuctionsIndex({auctions}) {
  const style={
    margin: '1rem 1rem',
    padding: '1rem 1rem',
    border: 'thin solid gainsboro',
  }
  return (
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
  )
}

export default AuctionsIndex;
