import React from 'react';

const proverbsDetail = ({ proverb }) => {
  return (
    <div>
      <h2>{proverb === null ? "" : proverb.short}</h2>
      <h4>{proverb === null ? "" : proverb.creator}</h4>
    </div>
  )
}


export default proverbsDetail;